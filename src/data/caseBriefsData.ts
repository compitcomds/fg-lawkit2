export type CaseBrief = {
    title: string;
    slug: string;
    category: string;
    letter: string;
    details: string;
    image: string;
    author: string;
    date: string;
    likes: number;
    share: number;
    quote: string;
    optimized: string;
    videobg: string;
    videolink?: string;
    vidtitle?: string;
    viddescription?: string;
    features?: string[]; // <-- added this line
    moredescription?: string; // <-- added this line
    tags?: string[]; // new field
    socials?: { icon: string; link: string }[]; // new field
    authorimg?: string; // new field for author image
    authorbio?: string; // new field for author bio
};


export const caseBriefs: CaseBrief[] = [
    {
        title: "Case A1",
        slug: "case-a1",
        category: "administrative-law",
        letter: "A",
        details: "Details...",
        image: "/blog_details_1.jpg",
        author: "John Doe",
        date: "2023-10-01",
        likes: 10,
        share: 5,
        quote: "This is a quote for Case A1",
        optimized: "lorem gdsuy  hgswdhuy  hjswgd  jshyhgd",
        videobg: "/video_bg.jpg"
    },
    {
        title: "Base A4 This is for testing",
        slug: "case-a4",
        category: "administrative-law",
        letter: "A",
        details:
            "When an unknown printer took ar galley offer type year anddey scrambled make type aewer specimen book bethas survived not only five when annery unknown printer.eed a little help from our friends from time to time.",
        image: "/blog_details_1.jpg",
        author: "John Doe",
        date: "2023-10-01",
        likes: 10,
        share: 5,
        quote: "This is a quote for Case A1",
        optimized: "lorem gdsuy  hgswdhuy  hjswgd  jshyhgd",
        videobg: "/video_bg.jpg",
        videolink: "#vid001",
        vidtitle: "We are Always Provide a Good Friendly Weather",
        viddescription: "This is a video description for Case A4",
        features: [
            "Online Educations Platform",
            "Daily News Update",
            "Budget Friendly Theme"
        ],
        moredescription:
            "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        tags: ["Motion", "Graphic", "Video"], // new tags
        socials: [ // new social media links
            { icon: "fa-brands fa-facebook-f", link: "#" },
            { icon: "fa-brands fa-x-twitter", link: "#" },
            { icon: "fa-brands fa-instagram", link: "#" },
            { icon: "fa-brands fa-pinterest-p", link: "#" }
        ],
        authorimg: "/author_1.jpg", // new field for author image
        authorbio: "John Doe is a legal expert with over 10 years of experience in administrative law." // new field for author bio
    },
    {
        title: "Base A5",
        slug: "case-a5",
        category: "administrative-law",
        letter: "A",
        details: "Details...dsssd",
        image: "/blog_details_1.jpg",
        author: "John Doe",
        date: "2023-10-01",
        likes: 10,
        share: 5,
        quote: "This is a quote for Case A1",
        optimized: "lorem gdsuy  hgswdhuy  hjswgd  jshyhgd",
        videobg: "/video_bg.jpg"
    },
    {
        title: "Case A2",
        slug: "case-a2",
        category: "animal-rights-law",
        letter: "A",
        details: "Details...",
        image: "/blog_details_1.jpg",
        author: "John Doe",
        date: "2023-10-01",
        likes: 10,
        share: 5,
        quote: "This is a quote for Case A1",
        optimized: "lorem gdsuy  hgswdhuy  hjswgd  jshyhgd",
        videobg: "/video_bg.jpg"
    },
    {
        title: "Case A3",
        slug: "case-a3",
        category: "admiralty-law",
        letter: "A",
        details: "Details...",
        image: "/blog_details_1.jpg",
        author: "John Doe",
        date: "2023-10-01",
        likes: 10,
        share: 5,
        quote: "This is a quote for Case A1",
        optimized: "lorem gdsuy  hgswdhuy  hjswgd  jshyhgd",
        videobg: "/video_bg.jpg"
    }
];

