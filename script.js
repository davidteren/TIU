// Team data structure
const teamMembers = [
    {
        name: 'Joshua Teren',
        title: 'Video Editor | Content Creator',
        bio: 'Specializing in social media marketing and community building',
        linkedin: 'https://www.linkedin.com/in/joshua-teren-298868150/',
        twitter: 'https://x.com/Josh_teren',
        photo: 'images/joshua-teren.jpg'
    },
    {
        name: 'David Teren (Jnr)',
        title: 'Creative Director',
        bio: 'Leading creative vision at 9-TEN Media Group',
        linkedin: 'https://www.linkedin.com/in/davidsydneyteren/',
        twitter: 'https://x.com/DavidSTeren',
        photo: 'images/david-jr.jpg'
    },
    {
        name: 'David Teren (Snr)',
        title: 'Tech Lead & Developer',
        bio: 'Ruby on Rails expert specializing in code audits and system architecture',
        linkedin: 'https://www.linkedin.com/in/davidteren/',
        twitter: 'https://x.com/davidteren',
        photo: 'images/david-sr.jpg'
    }
];

// DOM Content Loaded handler
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('team-container');
    
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card bg-white rounded-xl shadow-lg p-8 mb-8';
        card.innerHTML = `
            <div class="flex flex-col md:flex-row items-center">
                <img src="${member.photo}" alt="${member.name}" 
                     class="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8">
                <div class="text-center md:text-left">
                    <h2 class="text-2xl font-bold text-blue-800 mb-2">${member.name}</h2>
                    <p class="text-blue-600 mb-4">${member.title}</p>
                    <p class="text-gray-600 mb-4">${member.bio}</p>
                    <div class="flex justify-center md:justify-start space-x-4">
                        <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer"
                           class="social-icon hover:text-blue-600 transition-colors">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="${member.twitter}" target="_blank" rel="noopener noreferrer"
                           class="social-icon hover:text-blue-600 transition-colors">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitBtn = e.target.querySelector('button[type="submit"]');
    
    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Replace with actual API endpoint
        await fetch('https://api.example.com/contact', {
            method: 'POST',
            body: formData
        });
        
        alert('Message sent successfully!');
        e.target.reset();
    } catch (error) {
        alert('Error sending message. Please try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
