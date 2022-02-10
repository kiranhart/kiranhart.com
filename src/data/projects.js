import {
    PortfolioImage,
    AnimeFillerListAPI,
    GithubUserSearch,
    AnilistAccountCreation,
    ReatOrderCart,
    ReactTodo,
    AuctionHouse,
    Shops,
    Markets,
    Skulls,
    Vouchers,
    CosmicVaults,
    CovidTracker,
    Flickr
} from './images';

const projects = [
    {
        name: 'Portfolio',
        description: 'This very website you are currently on!',
        livePreview: 'https://kiranhart.com/',
        github: 'https://github.com/kiranhart/kiranhart.com',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'Styled Components',
            'React Router',
            'Redux'
        ],
        image: PortfolioImage
    },
    {
        name: 'Covid Tracker',
        description: 'A Covid-19 tracker that displays worldwide data as well indivudal country data.',
        livePreview: 'https://kiran-covid-tracker.surge.sh/',
        github: 'https://github.com/kiranhart/covid-tracker',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'React Router',
            'Redux',
            'Redux Saga & Toolkit',
            'Styled Components',
            'disease.sh',
        ],
        image: CovidTracker
    },
    {
        name: 'Flickr',
        description: 'A recreation of the Flickr.com home and explore pages, not 100% identical, but the general layout is there.',
        livePreview: 'https://kiran-flickr.surge.sh',
        github: 'https://github.com/kiranhart/Flickr',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'React Router',
            'Redux Saga & Toolkit',
            'Flickr API',
        ],
        image: Flickr
    },
    {
        name: 'Todo List',
        description: 'A simple todo list built with react and redux',
        livePreview: 'https://kiran-react-todo.surge.sh/',
        github: 'https://github.com/kiranhart/react-todo',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'Styled Components',
            'Redux'
        ],
        image: ReactTodo
    },
    {
        name: 'Mock Order Cart',
        description: 'A mock cart system using react and the context api',
        livePreview: 'https://kiran-react-cart.surge.sh/',
        github: 'https://github.com/kiranhart/react-order-cart',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'Context API',
            'CSS Modules'
        ],
        image: ReatOrderCart
    },
    {
        name: 'Anime Filler List API',
        description: 'An API that returns a list filler episodes for an anime',
        livePreview: 'https://anime-fillerlist-api.vercel.app/',
        github: 'https://github.com/kiranhart/Anime-Filler-List-API',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'ExpressJS',
            'Morgan',
            'Helmet',
            'Cors'
        ],
        image: AnimeFillerListAPI
    },
    {
        name: 'Github User Search',
        description: 'Used to search for github users and return total repos, followers, and following',
        livePreview: 'https://kiranhart-github-user-search.surge.sh/',
        github: 'https://github.com/kiranhart/Github-User-Search',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'React',
            'TailwindCSS',
            'Custom Hooks'
        ],
        image: GithubUserSearch
    },
    {
        name: 'Anilist Account Creation',
        description: 'Used to check the account creation date for older anilist accounts',
        livePreview: 'https://anilist-account-creation.surge.sh/',
        github: 'https://github.com/kiranhart/Anilist-Account-Creation-Check',
        primaryLanguage: 'JavaScript',
        type: 'Website',
        builtWith: [
            'HTML',
            'JavaScript',
            'CSS',
            'Fetch'
        ],
        image: AnilistAccountCreation
    },
    {
        name: 'Auction House',
        description: 'The most feature packed, up to date auction plugin on Spigot. 1.8-1.18 support in a single jar.',
        livePreview: 'https://www.spigotmc.org/resources/auction-house-the-ultimate-auction-house.60325/',
        github: 'https://github.com/kiranhart/auction-house',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 6806,
        image: AuctionHouse
    },
    {
        name: 'Shops',
        description: 'Ever wanted to create categorized server shops, well you\'ve found that plugin.',
        livePreview: 'https://www.spigotmc.org/resources/shops-the-ultimate-server-shop.75600/',
        github: 'https://github.com/tweetzy/shops',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 6807,
        image: Shops
    },
    {
        name: 'Markets',
        description: 'Markets is a completely new take on traditional player owned shops',
        livePreview: 'https://www.spigotmc.org/resources/markets-the-ultimate-player-shop.92178/',
        github: 'https://github.com/tweetzy/markets',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 7689,
        image: Markets
    },
    {
        name: 'Vouchers',
        description: 'An easy to use voucher plugin, completely GUI based.',
        livePreview: 'https://www.spigotmc.org/resources/vouchers-the-ultimate-voucher-plugin.89864/',
        github: 'https://github.com/tweetzy/vouchers',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 10530,
        image: Vouchers
    },
    {
        name: 'Skulls',
        description: 'Skulls is a collection of 41k+ custom textured Minecraft heads. A free alternative to Head Database',
        livePreview: 'https://www.spigotmc.org/resources/skulls-the-ultimate-head-database.90098/',
        github: 'https://github.com/tweetzy/skulls',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 10616,
        image: Skulls
    },
    {
        name: 'Cosmic Vaults',
        description: 'A unique but simple to use player vault system',
        livePreview: 'https://www.spigotmc.org/resources/cosmic-vaults.45463/',
        github: 'https://github.com/tweetzy/cosmic-vaults',
        primaryLanguage: 'Java',
        type: 'Plugin',
        bStats: 6789,
        image: CosmicVaults
    }
];

export default projects;