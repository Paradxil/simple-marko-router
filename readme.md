# simple-marko-router
This router was designed to be simple, lightweight, and integrate with MarkoJS. As such its only dependency is Marko and it is not feature heavy.

Currently tested using `@marko/serve`.

## Getting started

`npm i simple-marko-router`

Add the `router` component to your app:

```marko
router default-route='/'
    @route path='/'
        home
    @route path='/login'
        login
```

Use the `router-link` component for navigation:

```marko
router-link path='/login'
    a -- Go to login
```

## Advanced usage

Instead of nesting the tags you want to display under `@route`, you can define the `component` attribute to be an imported marko tag. This allows you to provide a single component that will be shown for that route.

Route params for these components can be accessed using `input.params`.

You can use different styles for different routes. However defining the `component` attribute will prevent that route from rendering its body content.

```marko
import HomePage from '../pages/home.marko';

router default-route='/home'
    @route path='/home' component=HomePage
    @route path='/about'
        h1 -- About Me
        p -- more content
```

## Route params

simple-marko-router does support route parameters such as `/project/:id`

Values are passed back as parameters to the nested tag `@route`. For more information on Marko tag parameters see https://markojs.com/docs/syntax/#parameters.

```marko 
router default-route='/project/this-is-the-project-id'
    @route|{params}| path='/project/:id'
        $console.log(params.id)
//Print out 'this-is-the-project-id'
```

Components rendered using the `component` attribute will be passed the route params as part of their input: `input.params`.

```marko
/// App.marko
import Project from './Project.marko'

router default-route='/project/this-is-the-project-id'
    @route path='/project/:id' component=Project


/// Project.marko
p -- ${input.params.id}

```

## Navigation

If using `router-link` does not meet your needs programmatic navigation is also possible. This is useful for redirection after an async process finishes.

Simply import and call `navigate` with a path string.

```marko
import {navigate} from 'simple-marko-router';

class {
    async handleClick() {
        await fetchUserData();
        navigate('/dashboard');
    }
}

a on-click('handleClick') -- Login
```

## Limitations & Road Map

The following is a list of planned features (and current limitations).

- No method for passing initial input to components shown using the `component` attribute.
- Need a way to pass input using `navigate` and `router-link`.

