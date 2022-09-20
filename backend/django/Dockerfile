FROM python:3.9.9

ENV PYTHONUNBUFFERED 1

RUN apt-get update

RUN mkdir /usr/src/django

WORKDIR /usr/src/django

COPY requirements.txt /usr/src/django
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt

COPY ./src /usr/src/django