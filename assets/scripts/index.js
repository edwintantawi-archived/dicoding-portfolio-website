const projectContent = document.getElementById('project-contents');
const blogContent = document.getElementById('blog-contents');
const copyrightYearsContent = document.getElementById('copyright-years');

projects.forEach((project) => projectContent.innerHTML += createProjectTemplate(project));
blogs.forEach((blog) => blogContent.innerHTML += createBlogTemplate(blog));
copyrightYearsContent.innerText = getYearsRangeFrom(2022)

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