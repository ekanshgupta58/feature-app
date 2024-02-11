# Feature Hub - EKANSH GUPTA

Created by Sinner Schrader to facilitate collaboration of different
frontend teams and reusability of components.

### What is Feature Hub?

The Feature Hub is JavaScript implementation of the micro frontends
approach to creating scalable web applications with multiple teams. We
can create various micro frontend which we say an app and can integrate
all of them in a single application using feature hub.

Instead of creating a front-end monolith (a single, large and sprawling
browser application), we split the browser based code into micro
frontends.

A large browser based application is broken into multiple features and
each feature is owned by a different team.

### What is a Feature App?

The Feature app in context of a feature hub is a micro frontend.

It encapsulates a reusable UI feature which can be used as per
requirements.

A Feature app consists of **dependencies,**

**optionalDependencies**,

and a **create()** method
```javascript
const myFeatureAppDefinition = {

dependencies: {

featureServices: {

\'acme:some-feature-service\': \'\^2.0.0\',

},

externals: {

react: \'\^16.7.0\',

},

},

optionalDependencies: {

featureServices: {

\'acme:optional-feature-service\': \'\^1.3.0\',

},

},

create(env) {

// \...

},

}
```
The dependencies consists of two type of dependencies :

**featureServices** :  all required Feature Services are declared. If
one of those dependencies can\'t be fulfilled, the Feature App won\'t be
created. 

**externals** :  all required external dependencies are declared.

The optionalDependencies.featureServices map contains all Feature
Service dependencies which are not compulsory. It will simply just log a
message.

The create method takes the single argument env, which has the following
properties:
```javascript
 const myFeatureAppDefinition = {
 create(env) {
 const {foo} = env.config;
 
 // \...
 },
 };
```
 featureServices --- An object of required Feature Services that are
    semver-compatible with the declared dependencies in the Feature App
    definition:
```javascript
 const myFeatureAppDefinition = {

 dependencies: {

 featureServices: {

 \'acme:some-feature-service\': \'\^2.0.0\',

 },

 },

 

 create(env) {

 const someFeatureService =

 env.featureServices\[\'acme:some-feature-service\'\];

 

 someFeatureService.foo(42);

 

 // \...

 },

 };
```
> featureAppId --- The ID that the integrator has assigned to the
> Feature App instance. This ID is used as a consumer ID to bind it to
> feature service
>
> featureAppName --- The name that the integrator might have assigned to
> the Feature App.
>
> baseUrl --- A base URL to be used for referencing the Feature App\'s
> own resources.

### What is a Feature Service?

A Feature Service provides shared state and shared functionality to all
the feature apps.

A feature service consists of an **id, dependencies** and
**optionalDependencies** and a **create()** method.
```javascript
const myFeatureServiceDefinition = {

id: \'acme:my-feature-service\',

dependencies: {

featureServices: {

\'acme:other-feature-service\': \'\^2.0.0\',

},

externals: {

rxjs: \'\^6.4.0\',

},

},

optionalDependencies: {

featureServices: {

\'acme:optional-feature-service\': \'\^1.3.0\',

},

},

create(env) {

// \...

},

};
```
Id: This ID is used as a consumer ID to bind to other feature services.

The dependencies consists of two type of dependencies :

**featureServices** :  all required Feature Services are declared. If
one of those dependencies can\'t be fulfilled, the Feature App won\'t be
created. 

**externals** :  all required external dependencies are declared.

The optionalDependencies.featureServices map contains all Feature
Service dependencies which are not compulsory. It will simply just log a
message.

The create() method consists of one argument env which has
featureServices as properties.
 