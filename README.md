![Logo of the project](https://raw.githubusercontent.com/huijari/sanasto/master/logo.png)

# Sanasto

> telegram bot that serves new words every day

## Supported languages
- `/english` `/en`
- `/finnish` `/fi`
- `/french` `/fr`
- `/russian` `/ru`
- `/spanish` `/en`

## Getting started

To run this bot you will need node and npm. After cloning this repository, install the dependencies,
configure the environment and start the server:

```sh
npm install
# set up necessary environmental variables (next section)
npm start
```

To actualy use it in Telegram you should set a [webhook](https://core.telegram.org/bots/api#setwebhook)
pointing to the server.

### Configuration

Next are the environmental variables used by this bot. You can set those normally on you environment
or use a `.env` file.

- `PORT`: server port.
- `SECRET`: telegram bot token.
- `DEBUG`: when this variable is present the bot will just print the results

## Developing

```shell
git clone git@github.com:huijari/sanasto.git
cd sanasto
npm install
# set up environmental variables
npm start
```

As it starts a local server you can send sample messages directly into it.

## Notice

The language files were taken from the [Cleartext](https://github.com/mortenjust/cleartext-mac) repository.
