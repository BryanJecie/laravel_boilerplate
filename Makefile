# Define the default target
.PHONY: app-local-build app-live-build app-local-down app-build app-rebuild app-restart app-restart-live app-down app-container

# repo link
APP_NAME = ghcr.io/sicurobrands/backend-api:latest

app-local-build:
	@docker compose -f ./local.dc.yml build --no-cache --force-rm
	@docker compose -f ./local.dc.yml up -d
	@$(MAKE) app-restart SERVICE_NAME=local_api

app-local-down:
	@docker compose -f ./local.dc.yml down

# Build and run the application
app-build:
	@docker compose -f ./testing.dc.yml build --no-cache --force-rm
	@docker compose -f ./testing.dc.yml up -d
	@$(MAKE) app-restart

# Build and run the application
app-live-build:
	@docker pull ghcr.io/sicurobrands/backend-api:latest
	@docker stack deploy -c prod.dc.yml app
	@$(MAKE) app-restart-live

app-cn:
	@docker exec -it $(SERVICE_NAME)

# Ensure SERVICE_NAME is defined for app-build
ifndef SERVICE_NAME
	$(error SERVICE_NAME is undefined. Use: make "<command>" SERVICE_NAME=<service_name>)
endif

# Rebuild the application
app-rebuild:
	@echo "Usage: make app-rebuild SERVICE_NAME=<service_name>"
	@$(MAKE) app-down
	@$(MAKE) app-build

app-live-rebuild:
	@$(MAKE) app-down
	@$(MAKE) app-live-build

# Restart Live the specified service
app-restart-live: check-service
	@CONTAINER_ID=$$(docker ps --filter "name=$(SERVICE_NAME)" -q); \
	if [ -z "$$CONTAINER_ID" ]; then \
		echo "No running container found for service: $(SERVICE_NAME)"; \
		exit 1; \
	fi; \
	echo "Restarting app, please wait..."; \
	docker exec -t $$CONTAINER_ID /bin/sh -c "php artisan config:clear"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan cache:clear"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan route:clear"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:amazon"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom --folder=quickbox3pl --db_connection=mysql_quickbox3pl "; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:link_builder"

# Restart the specified service
app-restart: check-service
	@CONTAINER_ID=$$(docker ps --filter "name=$(SERVICE_NAME)" -q); \
	if [ -z "$$CONTAINER_ID" ]; then \
		echo "No running container found for service: $(SERVICE_NAME)"; \
		exit 1; \
	fi; \
	echo "Restarting app, please wait..."; \
	docker exec -t $$CONTAINER_ID /bin/sh -c "composer install --ignore-platform-reqs && chmod -R 777 storage"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan config:clear"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan route:clear"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom2"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom --folder=quickbox3pl --db_connection=mysql_quickbox3pl "; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:custom2 --folder=google_ads --db_connection=mysql_googleads"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan migrate:link_builder"; \
	docker exec $$CONTAINER_ID /bin/sh -c "php artisan cache:sales --lastDays=7"

# docker exec $$CONTAINER_ID /bin/sh -c "php artisan cache:clear"; \
# Stop the specified service
app-down: check-service
	@echo "Stopping service: $(SERVICE_NAME)..."
	@docker stop $(SERVICE_NAME)
	@docker rm $(SERVICE_NAME)

# Access the container of the specified service
app-container: check-service
	@CONTAINER_ID=$$(docker ps --filter "name=$(SERVICE_NAME)" -q); \
	if [ -z "$$CONTAINER_ID" ]; then \
		echo "No running container found for service: $(SERVICE_NAME)"; \
		exit 1; \
	fi; \
	echo "Accessing service container..."; \
	docker exec -t $$CONTAINER_ID /bin/sh

# Ensure SERVICE_NAME is defined for commands
check-service:
ifndef SERVICE_NAME
	$(error SERVICE_NAME is undefined. Use: make "<command>" SERVICE_NAME=<service_name>)
endif


