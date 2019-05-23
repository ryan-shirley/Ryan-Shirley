<template>
    <div>
        <section class="box-inner bg-primary main circle jumbo-box mb-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <h1 class="heading-shadow mb-4">Hello, I’m an <strong>Award Winning</strong> Web Designer</h1>
                        <p class="mb-4">My name is Ryan Shirley and I love to design and build websites! I have turned a hobby that I am passionate about into my career. I’m also an avid photographer.</p>
                        <nuxt-link :to="{ name: 'about' }" class="btn btn-light text-uppercase mb-5">About Me</nuxt-link>
                        
                        <client-logo-list>
                            <picture>
                                <source srcset="~/static/images/brands/Jameson-Logo.webp" type="image/webp" />
                                <source srcset="~/static/images/brands/Jameson-Logo.png" type="image/png" />
                                <img src="~/static/images/brands/Jameson-Logo.webp" />
                            </picture>
                            <picture>
                                <source srcset="~/static/images/brands/Nuan-Logo.webp" type="image/webp" />
                                <source srcset="~/static/images/brands/Nuan-Logo.png" type="image/png" />
                                <img src="~/static/images/brands/Nuan-Logo.webp" />
                            </picture>
                        </client-logo-list>
                    </div>
                    <div class="col-md-5">
                        <picture>
                            <source srcset="~/static/images/illustration.webp" type="image/webp" class="img-fluid illustration" />
                            <source srcset="~/static/images/illustration.png" type="image/png" class="img-fluid illustration" />
                            <img src="~/static/images/illustration.webp" class="img-fluid illustration" />
                        </picture>
                    </div>
                </div>
            </div>
            <div class="scroller">
                <a href="#" v-scroll-to="'#featured-projects'">
                    <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194 87"><defs><style>.cls-1{fill:#fff;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,87C40,87,54,0,97,0s56,87,97,87"/></g></g></svg>
            </div>
            <span id="circle"></span>
        </section>

        <section id="featured-projects">
            <div class="section-heading">
                <h2>Featured Projects</h2>
                <p>A small collection of my work</p>
            </div>
            <!--/.Featured Projects Heading -->

            <work-project
                secondaryHeading="Photography / Video"
                heading="St. Patrick's day video series captured in the UK"
                text="A series of videos to showcase various events for Jameson Irish Whiskey for St. Patrick's day."
                className="bg-jameson"
                img="/work/Jameson-project"
            />
            <!--/.Jameson Project -->

            <work-project
                secondaryHeading="Front-End Designer"
                heading="Kia Service Ireland"
                text="An online service booking system for all Kia cars in Ireland that provides quotes from local Kia dealers."
                className="bg-kia"
                img="/work/Kia-project"
                btnText="View Project"
                btnLink="https://www.kiaservice.ie/"
                :btnLinkInternal="false"
                :swap="true"
            />
            <!--/.Kia Project -->

            <work-project
                secondaryHeading="Web Designer / Developer"
                heading="IADT - Artist Portfolio"
                text="An e-commerce platform aimed directly at artists to help showcase their work in an elegant professional form."
                className="bg-secondary"
                img="/work/Artist-portfolio-project"
                btnText="View Project"
                btnLink="https://college.ryanshirley.ie/professional-practice/"
                :btnLinkInternal="false"
            />
            <!--/.Kia -->
        </section>

    </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Ryan Shirley Award Winning Website Designer - Dublin, Ireland",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: "I’m an award winning website designer from Dublin, Ireland.  I love to design and build websites, expressing my creative skills as both a designer and developer" }
      ]
    }
  }
}
</script>