# Hide-it

[![License](https://img.shields.io/github/license/FOSS-Cell-GECPKD/hide-it?style=for-the-badge)](https://github.com/FOSS-Cell-GECPKD/hide-it/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/FOSS-Cell-GECPKD/hide-it?style=for-the-badge)](https://github.com/FOSS-Cell-GECPKD/hide-it/issues)
[![Chat on Gitter](https://img.shields.io/badge/chat--on-gitter-brightgreen?style=for-the-badge&logo=appveyor)](https://gitter.im/FOSS-Cell-GECPKD/Hide-it)
<br/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/c27123f8-e5b3-4471-95a5-1750162036f5/deploy-status)](https://hide-it.netlify.app/)
[![ FOSS-Cell-GECPKD ](https://circleci.com/gh/FOSS-Cell-GECPKD/Hide-it.svg?style=shield)](https://app.circleci.com/pipelines/github/FOSS-Cell-GECPKD/Hide-it)

## About

A progressive web-app which utilizes whitespaces to hide the text from being visible.

## Setup

#### Clone this repo!

Make a local clone of this repo, so you can work on it from your own computer.
```
git clone https://github.com/FOSS-Cell-GECPKD/hide-it.git
```
#### Running the React App

- open terminal at the repo
```
cd hide-it
npm install
npm start
```
## Instructions for use

#### To Encode
- Enter the text you want to hide in the first box
- Enter an optional mask text 
- Press encode button
- Press Copy, and you have the encrypted text in your clipboard
#### To Decode
- Enter the encrypted text into the first box
- Press decode, and there you have it 

## How this works?

#### Encoder
- First it takes the text to encode and splits it into characters.
- It then takes each character and converts it into unicode.
- The unicode is then converted to 8-bit binary code.
- Then, for each 1 and 0 it returns a zero-width character ie '\u200B' and '\u200C' respectively.
- Finally, it joins all these into a string, places '\uFEFF' in between and returns it.

#### Decoder
- Firstly, it splits the given string into an array using '\uFEFF'
- Now, it changes zero-width characters into binary by replacing 1,0 for every '\u200B' and '\u200C' respectively.
- Then it converts these binary codes into integer.
- The integers are then converted to character.
- And lastly, the characters are then joined to make the final string.

### Contributing
- Check out our [contributing](CONTRIBUTING.md) guide.

### Community
Discussions about Hide-it takes place on Gitter Chat. Anyone is welcome to join these conversations.

## License
Licensed under the [MIT License](LICENSE).

This project was a part of FOSS OpenHack '20: https://openhack.gitbook.io/openhack-20/.

