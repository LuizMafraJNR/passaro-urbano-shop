# PeixeUrbano

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Como foi criado

```
ng new peixe-urbano -p peixe-urbano --skip-tests=true
```

# Instalando bootstrap, jquery e tether

--save é utilizado para incluir no nosso projeto.

## Bootstrap

```
npm install bootstrap@4.0.0 --save
```

## Jquery

```
npm install jquery --save
```

## Tether

Tether facilita o posicionamento de objetos com posiçoes absolutas.

```
npm install tether --save
```

Em seguida tem que adicionar tudo no angular.json

CSS

"/node_modules/bootstrap/dist/css/bootstrap.min.css",

SCRIPT

"/node_modules/jquery/dist/jquery.min.js",
              "/node_modules/bootstrap/dist/js/bootstrap.min.js",
              "/node_modules/tether/dist/js/thether.min.js"