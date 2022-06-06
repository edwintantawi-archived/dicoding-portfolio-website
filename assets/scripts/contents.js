const projects = [
    {
        title: 'Todonesia',
        image: 'assets/images/projects/todonesia-logo.svg',
        category: 'TodoList',
        tags: ['React JS', 'Firebase'],
        url: 'https://github.com/edwintantawi/projects__todonesia'
    },
    {
        title: 'AirBnB Clone',
        image: 'assets/images/projects/airbnb-logo.svg',
        category: 'Clone App',
        tags: ['Next JS', 'Tailwindcss'],
        url: 'https://github.com/edwintantawi/clone-app__airbnb'
    },
    {
        title: 'DevNote',
        image: 'assets/images/projects/devnote-logo.svg',
        category: 'Note App',
        tags: ['Dart', 'Flutter'],
        url: 'https://github.com/edwintantawi/devnote_app'
    },
];

const blogs = [
    {
        title: 'Mengenal Teknologi Web-Components',
        tags: ['Web Component', 'Javascript', 'HTML'],
        summary: 'Pernahkah kamu membanyangkan membuat element HTML kita sendiri? Wah kalau bisa itu sungguh luar biasa bukan?',
        url: 'https://edwintantawi.medium.com/mengenal-teknologi-web-component-301a276b966c',
        date: '2022-05-16',
    },
    {
        title: 'Yang tidak kamu ketahui tentang javascript, serta bedah increment operator',
        tags: ['Conquer Javascript', 'Javascript'],
        summary: 'Mengulik beberapa hal yang mungkin saja kita tidak ketahui di javascript, serta membeda salah satu operator yaitu incement operator',
        url: 'https://edwintantawi.medium.com/conquer-javascript-1-berteman-dengan-javascript-cb226192eabf',
        date: '2021-10-11',
    },
    {
        title: 'Mengenal TailwindCSS v2.2.10',
        tags: ['CSS', 'Tailwindcss'],
        summary: 'TailwindCSS merupakan framework CSS(Cascading Style Sheets) yang menganut konsep Utility-First. Kita akan belajar menguasai TailwindCSS dari basicnya',
        url: 'https://edwintantawi.medium.com/belajar-tailwindcss-v2-2-10-a4584c64020c',
        date: '2021-10-08',
    },
];

function createTagsTemplate(tags) {
    return tags.map((tag) => {
        return `<li class="tags__item">${tag}</li>`
    }).join('')
}

function createProjectTemplate(project) {
    const {title, category, tags, url, image} = project;

    return `
        <a href="${url}">
            <article class="card project">
                <img src="${image}" alt="${title} logo" class="project__image">
                <header>
                    <h3 class="project__heading">${title} <span class="project__category">(${category})</span></h3>
                    <ul class="tags">
                        ${createTagsTemplate(tags)}                      
                    </ul>
                </header>
            </article>
        </a>
    `;
}

function createBlogTemplate(blog) {
    const {title, tags, summary, url, date} = blog;

    return `
        <a href="${url}">
            <article class="blog">
                <header>
                    <h3 class="blog__heading">${title}</h3>
                    <ul class="tags">
                        ${createTagsTemplate(tags)}
                    </ul>
                </header>

                <p class="blog__summary mt-2">
                    <time datetime="${date}" class="blog__date">${date}</time> • ${summary}
                </p>
            </article>
        </a>
    `;
}

function getYearsRangeFrom(yearFrom) {
    const currentYear = new Date().getFullYear();
    const isSameYear = currentYear === yearFrom;

    if (isSameYear) return yearFrom;

    return `${yearFrom} - ${currentYear}`
}

const projectContent = document.getElementById('project-contents');
const blogContent = document.getElementById('blog-contents');
const copyrightYearsContent = document.getElementById('copyright-years');

projects.forEach((project) => projectContent.innerHTML += createProjectTemplate(project));
blogs.forEach((blog) => blogContent.innerHTML += createBlogTemplate(blog));
copyrightYearsContent.innerText = getYearsRangeFrom(2022)
