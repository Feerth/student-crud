# Backend - Sistema de Gestión de Estudiantes

API RESTful construida con Spring Boot para gestionar la información de los estudiantes.

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- **Java Development Kit (JDK) 21**
- **PostgreSQL** (Servidor de base de datos)
- **Maven** (Opcional, si usas el wrapper incluido `./mvnw`)

## ⚙️ Configuración

### Base de Datos

1.  Asegúrate de que el servicio de PostgreSQL esté en ejecución en el puerto `5432`.
2.  Crea una base de datos llamada `estudiantesdb`.
3.  Verifica tus credenciales en `src/main/resources/application.properties`. Por defecto está configurado para:
    - Usuario: `postgres`
    - Contraseña: `123123`

> **Nota**: Si tus credenciales son diferentes, actualiza el archivo `application.properties`.

## 🚀 Ejecución

Puedes iniciar la aplicación utilizando el wrapper de Maven incluido:

**En Windows:**

```powershell
./mvnw spring-boot:run
```

**En Linux/Mac:**

```bash
./mvnw spring-boot:run
```

La API estará disponible en: `http://localhost:8080`

## 🧪 Endpoints Principales

La aplicación expone endpoints REST para las operaciones CRUD de estudiantes. Puedes probarlos usando Postman o cURL una vez iniciado el servidor.
