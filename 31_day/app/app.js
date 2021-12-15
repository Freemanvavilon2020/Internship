const express = require('express'),
    app = express(),
    session = require('express-session'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    flash = require('connect-flash')

const host = '127.0.0.1'
const port = 7000

function checkAuth() {
    return app.use((req, res, next) => {
        if (req.user) next()
        else res.redirect('/login')
    })
}

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

app .use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'you secret key' }))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

passport.use(
    new localStrategy(
        {
            usernameField: 'login',
            passwordField: 'pwd',
        },
        (user, password, done) => {
            if (user !== 'test_user')
                return done(null, false, {
                    message: 'User not found',
                })
            else if (password !== 'test_password')
                return done(null, false, {
                    message: 'Wrong password',
                })

            return done(null, { id: 1, name: 'Test', age: 21 })
        }
    )
)


app.get('/login', (req, res) => {
    res.send('Login page. Please, xcccc.')
})

app.use((req, res, next) => {
    if (req.user) next()
    else res.redirect('/login')
})

app.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true,
    })
)

app.get('/home', checkAuth(), (req, res) => {
    res.send("Home page. You're authorized.")
})

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
})