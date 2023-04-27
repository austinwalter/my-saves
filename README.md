# MySaves
MySaves is a web application that allows visitors to submit YouTube videos, see all the submissions, and play the videos submitted by others in a beautiful UI.

## UI Design

I deviated from my original mockups for the feed page because the embedded shorts just didn't look very good in the single feed layout on desktop. I switched to the masonry layout to take better advantage of the different shape of the shorts. It also has it's problems, but looks nice. [^1]

From what I've read, by default YouTube embeds use a 16 / 9 aspect ratio. For YouTube shorts, we want to flip that aspect ratio so that the Shorts are taller than they are wide. This leads to the question on how to you make to vastly different formats look good while occupying the same space.

The color scheme I took from an off the self eBook of web design color palettes I bought a while back. The cyan clashes a little with the Youtube red color, if I was going to do it again I'd select a different color that compliments it better. 

https://www.figma.com/file/996RLvZxgslEodaWY4W9Gp/MySaves?node-id=16%3A90&t=tHUb809bKJYJ5suf-1

## Front End & Layout

I like to reference Google's Material design principles because they're very detailed and easy to read. [^2]

## Database

I did decide to setup a database, so I created one using Supabase like you suggested. I didn't setup randomized ID strings or UUIDs to save time, but if we were implementing a production web app that would be the best practice from a security standpoint. [^3] I used a guide on their website to help with generating the database types for Typescript. [^4]

I forgot to implement the delete functionality...

# Display
Youtube autoplay not possible on mobile. [^5]

If I were going to continue to develop this I would probably use a custom modal for displaying each post. The default headless ui has limitations, such as making it very difficult to also expose access the header and header buttons while it's open.

I made the mistake of setting up cursoring in ascending order, and by the time I realized what I had done, I didn't have enough time to go back. So new posts show up at the very bottom instead of the top.

I got the bottom bar to look good inside of the mobile simulation in the browser, but it's hit-or-miss depending on the phone. Something to do with how mobile browsers will "hide" their url bar to give you back more space, but then the bottom bar doesn't move down when that happens.

## References

[^1]: https://stackoverflow.com/questions/66914169/can-i-create-a-masonry-layout-using-tailwind-css-utility-classes
[^2]: https://m2.material.io/design/layout/understanding-layout.html
[^3]: https://supabase.com/blog/choosing-a-postgres-primary-key
[^4]: https://supabase.com/docs/guides/api/rest/generating-types
[^5]: https://stackoverflow.com/questions/15090782/youtube-autoplay-not-working-on-mobile-devices-with-embedded-html5-player
