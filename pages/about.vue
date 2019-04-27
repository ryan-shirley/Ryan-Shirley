<template>
    <div>
        <section class="box-inner bg-secondary circle jumbo-box mb-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <h1 class="heading-shadow mb-4">About</h1>
                        <p>I’m an award winning website designer from Ireland. I have worked on many projects for brands such as <strong>Paramount Pictures</strong>, <strong>Jameson Irish Whisky</strong> and <strong>KIA Ireland</strong>.</p>
                        <p>I’m also an avid photographer having worked with the Australian luxury clothing brand Nuan Cashmere.</p>
                    </div>
                    <div class="col-md-5">
                        
                    </div>
                </div>
            </div>
            <span id="circle"></span>
        </section>

        <section class="container mb-5">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2>My Experience</h2>
                    <p>I have worked both freelance and in industry on both large and small scale projects for brands such as Paramount Pictures, Jameson Irish Whisky and KIA Ireland. Working on these projects has given me the opportunity to express my creative skills as both a designer and developer.</p>
                    <p>I am currently studying Creative Computing at the Institute Of Art Design + Technology.</p>
                </div>
                <div class="col-md-5 offset-md-1">
                    <picture>
                        <source srcset="~/static/images/my-experience.webp" type="image/webp" class="img-fluid rounded mb-5" />
                        <source srcset="~/static/images/my-experience.jpg" type="image/jpeg" class="img-fluid rounded mb-5" />
                        <img src="~/static/images/my-experience.webp" class="img-fluid rounded mb-5" />
                    </picture>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-5 order-2 order-md-1">
                    <picture>
                        <source srcset="~/static/images/award.webp" type="image/webp" class="img-fluid rounded mb-5" />
                        <source srcset="~/static/images/award.jpg" type="image/jpeg" class="img-fluid rounded mb-5" />
                        <img src="~/static/images/award.webp" class="img-fluid rounded mb-5" />
                    </picture>
                </div>
                <div class="col-md-6 offset-md-1 order-1 order-md-2">
                    <h2>My Award</h2>
                    <p>I was awarded <strong>best web design</strong> in the Eir Junior Spiders Awards in the tera spiders category. This was presented to me by Susan Reardon. My project titled “Ryan Shirley Web Design” was for my personal website.</p>
                    <p>I was shortlisted 11 times across the 4 years I entered.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  head () {
    return {
      title: "About Ryan Shirley | Award Winning Web Designer",
      meta: [
        { hid: 'description', name: 'description', content: 'My name is Ryan and I’m an award winning web designer. I have worked on projects for brands such as Paramount Pictures, Jameson Irish Whisky and KIA Ireland.' }
      ]
    }
  }
}
</script>