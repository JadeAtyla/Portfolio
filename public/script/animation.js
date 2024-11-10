const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');  
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

// SLIDE ANIMATION
const images = ['html', 'css', 'javascript', 'java', 'mysql', 'mongodb', 'python', 'nodejs', 'php', 'ibis-paint', 'figma'];
const languages = ['HTML', 'CSS', 'JavaScript', 'Java', 'MYSQL', 'MongoDB', 'Python', 'Node JS', 'PHP', 'Ibis Paint', 'Figma'];
const wrapper = document.querySelector('#wrapper');

wrapper.innerHTML = '';

for (let i = 0; i < images.length; i++) {
    const itemHTML = `
        <div class="item item${i+1}">
            <article>
                <img
                    src="/images/${images[i]}.svg"
                    alt="${languages[i]} icon"
                    class="icon"
                />
            </article>
        </div>`;
    
    wrapper.innerHTML += itemHTML;
}