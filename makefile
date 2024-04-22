
# Build the Docker image
build:
	docker build -t my-http-server . 

# Run the Docker container
run:
	docker run -p 8080:8080 my-http-server

# Stop the Docker container
stop:
	docker stop $(shell docker ps -q --filter ancestor=my-http-server)

buildandrun:
	make build
	make run	
	