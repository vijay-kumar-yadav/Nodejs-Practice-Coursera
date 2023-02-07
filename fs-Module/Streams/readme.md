# streams

Implement a Readable Stream:

1. Flowing : Data is read from the underlying system automatically through the eventEmitter.
2. Paused : The stream.read() method is called explicitly to read chunks of data from the stream.

Common used events : Data, Finish, Error, End
