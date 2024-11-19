# Configuración de CORS en Nginx Proxy Reverso

## 1. Configuración de CORS en Nginx Proxy Reverso

Creamos un archivo de configuración de Nginx llamado `proxy.conf` donde establecimos las reglas de CORS.  Dentro del bloque `server { ... }`, agregamos la siguiente configuración de CORS:

```nginx
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

if ($request_method = 'OPTIONS') {
    return 204;
}
```

Incluimos el archivo `proxy.conf` en la configuración principal de Nginx (`nginx.conf` o `default.conf`) para que se apliquen los cambios.


## 2. Verificación y Solución de Problemas

Revisamos el siguiente error de CORS:

```
Access to XMLHttpRequest at 'http://analitys.app.ultracem.local/api/search?query=&starred=false' from origin 'http://miobox.app.ultracem.local' has been blocked by CORS policy: Request header field authorization is not allowed by Access-Control-Allow-Headers in preflight response.
```

Para resolver este problema, agregamos el encabezado `Authorization` a la lista de `Access-Control-Allow-Headers` en la configuración de Nginx:

```nginx
add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
```

Después de este cambio, el acceso desde `http://miobox.app.ultracem.local` a `http://analitys.app.ultracem.local/api/search` debería funcionar correctamente.


## 3. Consideraciones Importantes

La configuración de CORS permitiendo el acceso desde cualquier origen (`Access-Control-Allow-Origin '*'`) se considera una práctica menos segura.  En un entorno de producción, se recomienda limitar el acceso a los orígenes específicos que necesites.  Por ejemplo:

```nginx
add_header 'Access-Control-Allow-Origin' 'http://miobox.app.ultracem.local';
```

Asegúrate de sustituir los valores de `<%-s.publicDomain%>`, `<%-s.crtPath%>`, `<%-s.keyPath%>`, `<%-s.localDomain%>` y `<%-s.containerHttpPort%>` con los valores correspondientes de tu entorno.

Aquí está el código organizado en formato Markdown:

## 4. Configuración de Nginx

### SSL Forzado

```nginx
<%
if (s.forceSsl) {
%>
server {
    listen       80;
    server_name  <%-s.publicDomain%>;

    # Used by Lets Encrypt
    location /.well-known/acme-challenge/ {
        root <%-s.staticWebRoot%>;
    }

    # Used by CapRover for health check
    location /.well-known/captain-identifier {
        root <%-s.staticWebRoot%>;
    }

    location / {
        return 302 https://$http_host$request_uri;
    }
}
<%
}
%>
```

### Configuración del Servidor

```nginx
server {
    <%
    if (!s.forceSsl) {
    %>
    listen       80;
    <%
    }
    if (s.hasSsl) {
    %>
    listen              443 ssl http2;
    ssl_certificate     <%-s.crtPath%>;
    ssl_certificate_key <%-s.keyPath%>;
    <%
    }
    %>

    client_max_body_size 500m;
    server_name  <%-s.publicDomain%>;

    # 127.0.0.11 is DNS set up by Docker, see:
    # https://docs.docker.com/engine/userguide/networking/configure-dns/
    # https://github.com/moby/moby/issues/20026
    resolver 127.0.0.11 valid=10s;
    set $upstream http://<%-s.localDomain%>:<%-s.containerHttpPort%>;

    location / {
        <%
        if (s.redirectToPath) {
        %>
        return 302 <%-s.redirectToPath%>$request_uri;
        <%
        } else {
        %>
        <%
        if (s.httpBasicAuthPath) {
        %>
        auth_basic           "Restricted Access";
        auth_basic_user_file <%-s.httpBasicAuthPath%>; 
        <%
        }
        %>

        # CORS configuration
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization';
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

        if ($request_method = 'OPTIONS') {
            return 204;
        }

        proxy_pass $upstream;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        <%
        if (s.websocketSupport) {
        %>
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
        <%
        }
        %>
        <%
        }
        %>
    }

    # Used by Lets Encrypt
    location /.well-known/acme-challenge/ {
        root <%-s.staticWebRoot%>;
    }
    
    # Used by CapRover for health check
    location /.well-known/captain-identifier {
        root <%-s.staticWebRoot%>;
    }

    error_page 502 /captain_502_custom_error_page.html;
    location = /captain_502_custom_error_page.html {
        root <%-s.customErrorPagesDirectory%>;
        internal;
    }
}
```