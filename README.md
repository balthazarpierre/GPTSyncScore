# GPTSyncScore chrome extension

🙏 Feel at ease to submit PR 🚀🚀🚀

Idea behind the extension : [Linkedin Post](https://www.linkedin.com/posts/pierre-baele_chatgpt-anniv-keepitreal-activity-7136227603769634817-rELS?utm_source=share&utm_medium=member_desktop)

_I have been playing around with ChatGPT for 3 weeks now, and I went from pessimistic to optimistic about the impact it can have on society. But for that, I think we need transparency about ChatgptUsage.
GPTSyncScore below 50% seems ok to me. The lower the better in terms of sincerity._

- 🟢 MVP : In clicking the extension, a popup appears where I can enter the two texts. I click on the 'SyncScore' button, and the percentage is copied to the clipboard.

- 🎯 Target feature : I am in the ChatGPT interface, entering my text into ChatGPT (with a prompt ID?). I iterate on the modification, and once satisfied with the result, I click on the extension, and the SyncScore is directly copied to my clipboard. Additionally, there is an option available where one can visually see the difference between the two texts.

ℹ️ Code is not so good right now because it was mostly generated with chatGPT 😅

## TODOS

- [] Improve GPTSyncScore calculation
- [] Add (CI) tests
- [] Better ui/ux
- [] add changelog
- [] add makefile to create archive.zip

## QA

- no words in common => GPTSyncScore 100%
- all words are the same => GPTSyncScore 0%
- orginal text "toto" / final text "toto est" => GPTSyncScore 50%
