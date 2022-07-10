FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP=${FLASK_APP}
ENV FLASK_RUN_HOST=${FLASK_RUN_HOST}
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]