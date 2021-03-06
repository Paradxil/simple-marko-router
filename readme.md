# simple-marko-router
This router was made for use with MarkoJS. It is lightweight and simple, with Marko as the only production dependency.

Currently tested using `@marko/serve`.

Demo: https://paradxil.github.io/simple-marko-router/

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

On page load the router will automatically navigate to the correct page based on the url. The `default-route` will be shown when no other routes match.

Optionally a `base-route` attribute can be defined that will be pre-pended to all paths.

```marko
router default-route='/' base-route='/app'
    @route path='/'
        home
```

## Component attribute

Instead of nesting tags you want to display under `@route`, you can assign the `component` attribute an imported marko tag. This allows you to provide a single component that will be shown for that route. Route params for these components can be accessed using `input.params`.

You can use different styles for different routes. However defining the `component` attribute will prevent that route from rendering its body content.

```marko
import HomePage from '<home>';

router default-route='/home'
    @route path='/home' component=HomePage
    @route path='/about'
        h1 -- About Me
        p -- more content
```

## Route params

simple-marko-router supports route parameters such as `/project/:id` or `/:userid/view/:projectid`.

Parameter values are passed back to the nested tag `@route`. For more information on Marko tag parameters see https://markojs.com/docs/syntax/#parameters.

```marko 
router default-route='/project/this-is-the-project-id'
    @route|{params}| path='/project/:id'
        $console.log(params.id)
//Prints out 'this-is-the-project-id'
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

## Known bugs/issues

Due to either a limitation with MarkoJs or my implementation, stateful content in a route will not always update correctly when the state is the parent of the router.

For example this will not work, neither the text input nor the p tag will update correctly on input.

```marko
class {
    onCreate() {
        this.state = {
            inputText: null
        };
    }

    setInput(event) {
        this.state.inputText = event.target.value;
    }
}

router default-route='/'
    @route path='/'
        input value=state.inputText on-input('setInput')
        p -- You input: ${state.inputText}

```

Instead break this into two components, and nest the state under the route.

```marko
/// app.marko
router default-route='/'
    @route path='/'
        inputdemo

/// inputdemo.marko
class {
    onCreate() {
        this.state = {
            inputText: null
        };
    }

    setInput(event) {
        this.state.inputText = event.target.value;
    }
}

input value=state.inputText on-input('setInput')
p -- You input: ${state.inputText}

```

## Limitations & Road Map

The following is a list of planned features (and current limitations).

- No method for passing initial input to components shown using the `component` attribute.
- Need a way to pass input using `navigate` and `router-link`.

