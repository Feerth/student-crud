# Sistema Estudiantes - Backend

Este es el backend para el sistema de gestión de estudiantes, construido con Spring Boot.

## Requisitos

- Java 21
- PostgreSQL

## Configuración

1. Asegúrate de tener PostgreSQL corriendo en el puerto 5432.
2. Crea una base de datos llamada `estudiantesdb`.
3. Configura tus credenciales en `src/main/resources/application.properties` (por defecto: user `postgres`, pass `123123`).

## Ejecución

Para iniciar la aplicación:

```bash
./mvnw spring-boot:run
```

O si tienes Maven instalado:

```bash
mvn spring-boot:run
```

La API estará disponible en `http://localhost:8080`.

## Contribuir

El proyecto utiliza Lombok, asegúrate de tener el plugin instalado en tu IDE.
