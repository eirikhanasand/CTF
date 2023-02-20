1. Change file type from ipa to zip.
2. Decompress zip.
3. Open Payload folder and enter the Login.app package.
4. Open the GoogleService-Info.plist file.
5. You will find a string next to the API_KEY field.
6. This means the API_KEY is exposed, therefore, the flag is S2G{API_KEY}.

 This challenge aims to shed light on the importance of keeping all keys hidden. The API_KEY is used for the connection between the application, and a remote google API. The API_KEY can be used by third parties to install malware, making the app behave differently from intended.
