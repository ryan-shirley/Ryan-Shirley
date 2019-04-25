<template>
    <div>
        <section>
            <div class="section-heading mt-5">
                <h1>My Work</h1>
                <div class="filter-projects">
                    <label v-bind:class="{ active: selectedCategory == 'All' }">
                        <input 
                            type="radio" 
                            v-model="selectedCategory" 
                            value="All" />
                            All
                    </label>
                    <label v-bind:class="{ active: selectedCategory == 'Design' }">
                        <input 
                            type="radio" 
                            v-model="selectedCategory" 
                            value="Design" /> 
                            Design
                    </label>
                    <label v-bind:class="{ active: selectedCategory == 'Development' }">
                        <input 
                            type="radio" 
                            v-model="selectedCategory" 
                            value="Development" /> 
                            Development
                    </label>
                    <label v-bind:class="{ active: selectedCategory == 'Photography' }">
                        <input 
                            type="radio" 
                            v-model="selectedCategory" 
                            value="Photography" /> 
                            Photography
                    </label>
                </div>
            </div>
            <!--/.My Work Heading -->

            <work-project
                v-for="work in filteredWork"
                v-bind:key="work.className"
                :secondaryHeading="work.secondaryHeading"
                :heading="work.heading"
                :text="work.text"
                :className="work.className"
                :img="work.img"
                :btnText="work.btnText"
                :btnLink="work.btnLink"
                :btnLinkInternal="work.btnLinkInternal"
                :swap="work.swap"
                :outerImage="work.outerImage"
            />
            <!--/.Project -->

        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    categories: [
                        'Photography',
                        'Video'
                    ],
                    secondaryHeading: 'Photography / Video',
                    heading: 'St Patricks day video series captured in the UK',
                    text: 'A series of videos to showcase various events for Jameson Irish Whiskey for St Patricks day.',
                    className: 'bg-jameson',
                    img: '/work/Jameson-project.png',
                    btnText: '',
                    btnLink: '',
                    btnLinkInternal: false,
                    swap: false,
                },
                {
                    categories: [
                        'Design'
                    ],
                    secondaryHeading: 'Front-End Designer',
                    heading: 'Kia Service Ireland',
                    text: 'An online appointment booking system for all Kia cars in Ireland. Quotes from local Kia dealers.',
                    className: 'bg-kia',
                    img: '/work/Kia-project.png',
                    btnText: 'View Project',
                    btnLink: 'https://www.kiaservice.ie/',
                    btnLinkInternal: false,
                    swap: true,
                },
                {
                    categories: [
                        'Design',
                        'Development'
                    ],
                    secondaryHeading: 'Web Designer / Developer',
                    heading: 'IADT - Artist Portfolio',
                    text: 'An e-commerce platform aimed directly at artists to help showcase their work in an elegant professional form.',
                    className: 'bg-secondary',
                    img: '/work/Artist-portfolio-project.png',
                    btnText: 'View Project',
                    btnLink: 'https://college.ryanshirley.ie/professional-practice/',
                    btnLinkInternal: false,
                    swap: false,
                },
                {
                    categories: [
                        'Photography',
                        'Design'
                    ],
                    secondaryHeading: 'Web Designer / Photographer',
                    heading: 'Luxury Cashmere Clothing',
                    text: 'A platform aimed directly at artists to help showcase their work in an elegant professional form. With the added feature of selling direct on site.',
                    className: 'bg-nuan photography-vertical',
                    img: '/work/Nuan-photography-project.png',
                    btnText: '',
                    btnLink: '',
                    btnLinkInternal: false,
                    swap: false,
                    outerImage: true,
                }
            ],
            selectedCategory: "All"
        }
    },
    computed: {
		filteredWork() {
			let app = this;
			let categories = app.selectedCategory;
			
			if(categories === "All") {
				return app.projects;
			} else {
				return app.projects.filter(function(project) {
                    for (var i in project.categories) {
                        if(project.categories[i] === categories) {
                            return project.categories[i]
                        }
                    }
				});
			}
        }
    },
    head () {
        return {
            title: "Work",
            meta: [
                { hid: 'description', name: 'description', content: '' }
            ]
        }
    }
}
</script>