1. In the file we find the string J2K{4#NkD9Bq*r@OcBfK}.
2. Considering that there is a big key in the image we have to think that we also need a key to decrypt it
3. Inspecting the key we find the word ERNYXRL engraved.
4. Now we have both a string and a key, we can therefore try vigene cipher decoder, as it is pretty common.
5. Decrypting it we get the wrong key, we therefore have to go back to the image again. 
   Upon inspecting it we find a roman icon in the bottom left, and we can also get the hint Dictator from the task if we need.
   Who is a roman dictator? Julius Ceasar. What did he make? The ceasar ciphers, or rot13 as it is often called.
6. Decrypting the key using rot13 we get REALKEY, which we can then use to decrypt the string to find flag S2G{4#NzT9Xs*a@KcQvG}.