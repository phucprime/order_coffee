# Order Coffee UI
Order Coffee React Native Application (Product images: [`The Coffee House`](https://www.thecoffeehouse.com))

### Installation
Install modules at [root](/) directory:

```
npm install
```
Install COCOAPODS dependencies at [ios](/ios) directory:
```
pod install
```
Start your application. Run the following:
```
react-native run-ios
```

### Redux thunk

Redux Thunk [middleware](https://redux.js.org/advanced/middleware)
allows you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if
a certain condition is met. The inner function receives the store methods
`dispatch` and `getState` as parameters.

```bash
npm install redux-thunk
```

Then, to enable Redux Thunk, use
[`applyMiddleware()`](https://redux.js.org/api/applymiddleware):

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk))
```

### The connect() function connects a React component to a Redux store
```javascript
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

<br />

### Home Screen
<img src="demos/Home.gif" width=250 height=500 />

### Rewards Screen
<img src="demos/Rewards.gif" width=250 height=500 />

### Locations Screen
<img src="demos/Location.gif" width=250 height=500 />

### Favorites Screen
<img src="demos/Favorite.gif" width=250 height=500 />

### Profile Screen
<img src="demos/Profile.gif" width=250 height=500 />

### Menu Screen
<img src="demos/Order.gif" width=250 height=500 />

### Details Screen
<img src="demos/orderDetail.gif" width=250 height=500 />

### Dark Mode feature
<img src="demos/darkMode.gif" width=250 height=500 />
