module.exports = {
    "env": {
    "browser": true
    },
    "globals": {
        "google":true,
        "result": true,
        "module": true,
        "round": true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "error"
        ],
        "no-unused-vars": [
            "error"
        ],
        "strict": [
            "error",
            "global"
        ],
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
            "error",
            80, 2,
            { ignoreUrls: true }
        ],
        "no-trailing-spaces": [
            "error", 
            { "skipBlankLines": true }
        ],
        "object-curly-spacing": [
        "error",
        "always"
        ],
        "newline-before-return":[
        "error"
        ]
    }
};