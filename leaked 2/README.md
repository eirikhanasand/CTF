1. Change file type from ipa to zip.
2. Decompress zip.
3. Open Payload folder and enter the Login.app package.
4. Open the GoogleService-Info.plist file.
5. Here there is a detailed explanation to simplify the finding of the flag, as it is displayed different on windows and mac. 
5. You will find the encrypted flag: F2T{pna_lbh_fcnz_zr_abj}
6. Using ROT13 you are able to decrypt this to S2G{can_you_spam_me_now}

 This challenge aims to shed light on the importance of keeping all keys hidden. The API_KEY is used for the connection between the application, and a remote google API. The API_KEY can be used by third parties to spam the user with notifications, making it impossible for users to interact with the app, and quickly making users uninstall the application if they recieve thousands of notifications per minute (this also makes their device crash).

