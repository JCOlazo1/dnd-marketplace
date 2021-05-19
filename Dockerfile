FROM python

ENV PYTHONUNBUFFERED 1
ENV PYTHON DONTWRITEBYTECODE 1

WORKDIR /src

COPY Pipfile Pipfile.lock /src/

RUN pip install pipenv && pipenv install --system

COPY . /src/
