# Universal Resolver Driver: `did:ct`

This is an [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for fictional **did:ct** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [did:ct method specification](https://github.com/blueroominnovation/did-ct-spec)

## Example DIDs

```
did:ct:zuerR5X7JKmBM6CqtLmU6a8XWJhEaW1WDe2tZapCg
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t ct-did-driver
docker run -p 8080:8080 ct-did-driver
curl -X GET http://localhost:8080/1.0/identifiers/did:ct:zuerR5X7JKnCAAfE6MABfhkcx2DF3Y2hgv3WQoGYh
```

## Build and Run (NodeJS)

```
npm start
```
