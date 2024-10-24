---
layout: post
title: A Career Joruney Story, Academic Research, and How to get Involved
date: 2024-10-23 16:40:16
description: Getting involved in academic research with industry experience and my work experience
tags: research advice
categories: research
---

# A Note to the Reader

As a student writing this currently applying to PhD programs in Computational Biology, I realized that my situation was unique in that I came from a background with no prior undergraduate research experience and went to industry before I decided to explore academic research. This blog post serves as a small piece of advice in hopes that the reader gains a new perspective or a new resource they didn't know about prior. I'm also currently writing my admissions essays right now, and felt like this would be a good break to reflect and figure out how to present the timeline of how I got into research and the research questions I want to answer later on.

Again, this is my personal view of research and my own opinions of topics that are already probably covered by advice lists such as Tao Xie's [advice list](https://taoxie.cs.illinois.edu/advice.htm) which is also in my bookmarks will I share below. If you want to **skip** my career story (understandable as I wrote a lot), scroll down to [Getting into a Lab](#getting-into-a-lab)!

# Background Story

## Industry

I have been a software engineer in the healthcare industry since 2019, when I graduated from undergrad. As someone with no Computer Science degree, I took MOOC's from EdX to supplement my coding background. When I joined UnitedHealth, I was part of our Technology Development program, which had two six-month rotations on different teams across different departments. My first rotation was related to Data Science in a chaotic team who wanted to pursue machine learning in the Community & State department. Community & State deals with government programs such as Medicare, Medicaid, and Long-Term care/retirement insurance claims as well as their electronic health records which record patient data. With so much clinical and insurance data provided to me, albeit messy and disorganized on legacy Oracle databases, I took it upon myself to find a usecase in a software engineering team. I ended up creating two applications which are used in a different form now to email parse Oracle reports for query remediation. This identifies queries from users across our company that may be inefficient and degrading performance on the production databases.

This involved a lot of messy regex and text parsing, and I ended up learning a lot about new things online courses and school don't teach you well. For example, using the Terminal **very** well and shortly learning that projects can be scrapped at any notice if you don't have anyone backing you. I had plenty of ideas, and similar to research, if you don't sell these ideas for a grant, your ideas go nowhere. My Oracle report parser might have been rather dull and not flashy in any shape or form, but I loved the idea of reducing technical debt and time waste.

This led me to my second project in my first rotation which was using something STIN transactions and tracking them to see where database imports were lagging to inform engineers and database admins on how to troubleshoot. Although this got farther than my Oracle reporting and was more flashy since I made a dashboard, it wasn't used because a lot of people didn't have any prior knowledge in STIN data in the first place. This leads me to my takeaways.

## Takeaways
* Innovation may make sense to you as a developer, but not necessarily to stakeholders you may try to appeal to.
* Scrapped projects may have logic or learning lessons you can use and recycle. I had six projects not gain any traction or funding until I made a big hit.
* Mentoring people is probably the best way to learn. It is *selfless* work but you end up having to [rubber ducky](https://en.wikipedia.org/wiki/Rubber_duck_debugging) processes and how you arrive to conclusions, especially to trainees. This helped me build up soft skills like presentations and documentation, in addition to debugging and deploying your ideas to production using a sound pipeline.
* Testing your code and packaging it is an invaluable skill that may not be tested in research as much but in industry, no one will take your package or application seriously if they cannot replicate it. This is similar to the tenant of reproducible research.
* This is my first job, and I found myself digging out of a hole of treating this as something to overly excel at and prioritizing my work-life balance/health.

# Getting into Research - 2 years as a Mid and Senior Level Engineer + NIH opportunities

After my rotations, I decided to stay on my second team (which some variation post re-organizations exist today) which was an application/full-stack development team. This team had more direction and freedom to explore new ideas as an innovation team. It was still under the department that focused on government funded health insurance, and had way more data than its commercial counterpart. I ended up adopting open-source software by the Apache Foundation which creates a lot of data-driven pipeline projects as part of their incubation project efforts to our use cases. Taking advantage of Apache software and learning to refactor aspects of it to work on our on-premise cloud architecture taught me a lot about DevOps and deployments as well as providing technical support to applications.

I wanted to gain more leadership experience by architecting solutions and involving myself in product management, so the company helped support me in getting an MBA at UC Davis, which was my first online program during the pandemic. I enjoyed how I made friends from my very first course (and we still are to this day) and I learned that graduate school is more mature/professional oriented. It was here that I learned how I learned and how to make friends/network to make sustained relationships in my career as well. After this, I began reading about graduate school for Computer Science and bridge programs to brush up on Computer Science theory. I then applied to CS bridge-like programs, including Online MCIT at Penn.

I used this as a stepping stone to get a foundation as well as to take advantage of my status as a Master's student. I wanted to explore what else I could do adjacent in academia relating to EHRs and clinical data. After two months of looking for something, I found some programs to apply to that had summer experiences. The reasoning behind this was the following: (1) I had only taken up to 594, and had practical scripting experience. I wanted 596 under my belt before I explored research with faculty because that would give some mathematical familiarity + knowledge on algorithms; (2) I wanted some prior experience to prove I could handle a lab.

I ended up getting accepted to the Graduate Data Science Summer Program at the National Institutes of Health (NIH). It was a cohort of 13 other students in graduate programs who wanted to get involved in technical problems in academic research which was a great stepping stone. The NIH is a government institute that provides a bunch of resources in terms of student training. Every day, there was some workshop, guest speaker, or networking event you could attend if you wanted. If you want to read more about the research I was involved in, you can find my project post [here](https://bryantduong.github.io/projects/3_project/). I took advantage of a lot of guest speakers and workshops throughout my summer and I enjoyed every second of it.

## Takeaways
* Its never too late to do research, especially if you have experience in industry. In fact, years of experience at a company can help inform you on soft skills that students may not have that no prior professional experience
* Similar to jobs - apply, apply, apply and don't fear being ghosted or rejection. Its all part of the process, and if you're serious about pursuing a research experience - whether you want a PhD or to try it out, you have to put some effort into it.
* Professional Masters students especially the online format may be harder to find opportunities. Students in professional programs often dont pursue research and their main goal is finding a job in industry. It will be hard to find students with the same goals as you, but there are also many online communities you can probably read about. r/labrats, r/GradSchool and r/PhD helped me a lot with this and imposter syndrome.
* Being humble, and asking questions without the fear of feeling stupid helps a lot. Even if I am behind my peers in Biology knowledge, I can't change that and I take everything as a learning experience. In fact, I probably ask some common sense, no-brainers on foundational topics, but its for my own benefit.
* Attend everything and anything when you do get an opportunity. Its good to get a lot of experiences, but the effort you put in will result in a better summer experience or lab experience.
* Infrastructure is *100%* different in research. Research uses a lot of high performance computing clusters fitted with GPU units using their own homebrew linux commands such as Slurm to deploy batch versus just Cloud technologies like Azure Stack pipelines. Linux shell scripting and knowing bash is very translatable and helpful, however.
* Balancing a remote industry job while taking 593 AND doing research definitely burned me out some nights, but this was worth it due to personal circumstances.

# Getting into a Lab
After summer, I found working in research was more fulfilling due to the complexity of problems while also still having the freedom to explore niche questions that I loved at UHG on the innovation team. I was in my Fall 2023 semester taking 594 + 595, and wanted to get involved with faculty and join a lab after my NIH research experience. I started to contact assistant faculty in various STEM disciplines who did applied computational research because one of my friends I made at the NIH suggested that assistant faculty may be easier to approach, with a new lab and more eager to hire students + give hands-on mentorship. I found this to be the case when I joined my current lab and cold emailed my advisor. She wanted me to move to Philadelphia to work and also contact the lab members to see if I was a good fit, which I was completely fine with and did for the summer at NIH (all of course, thanks to my understanding managers at UHG and remote nature of my job). This felt more like getting to know the people I was working with rather than the typical technical interview I was used to and a bit of a relief. After I got to learn a bit about everyone I started getting into research and joining the lab mid December 2023 and have worked on projects here since!

# Advice and Takeaways - In No Particular Order
* Cold emails like summer research experiences can get a bunch of varied responses including none...
* Read the faculty's personal website to determine fit and from there, a recent publication.
* Make sure you balance your other priorities so that you can fully commit to research projects
* Time commitment should be communicated at the start with your advisor and a clear career goal/path to your goals should be defined well.
    * Some of the meetings I have with my advisor are purely career advice and giving an update into my life.
* Read a lot of papers, even if you don't understand anything.
* Advice on [how to read a paper](http://linyun.info/p83-keshavA.pdf).
* Don't be afraid to present scientific work to your lab or at conferences, even if you sound stupid or can't answer questions. Its a learning process and I still feel the imposter syndrome every day. Even if I freeze up on presenting, its because I'm learning to interpret science and getting used to the format.
* Not all publications are weighed equally. Some are in more prestiguous journals depending on the discpline and "tiered" differently - this can reflect the rigor of the review process and you need to temper your expectations. And some journals have subjournals which have different tiers from their parent journals. Check its impact factor to learn more.
* Here are my Chrome [bookmarks](https://drive.google.com/file/d/1-gS2JovppZvyC3t-RdWSWA69MbQ4ePiV/view?usp=sharing) you can import that will give you research links I used to find summer and year-round experiences outside of Penn.
* PhD admissions require some time to be successful (still to be determined for me!) - spend at least 3 months before the deadline gathering application materials and shortlisting schools/recommenders. Most programs have deadlines in December of that year for admission into the following year.
* You'll perpetually feel like you have no idea what you are doing, but that's because research is open-ended.
* You really have to convince yourself that you want to pursue research if it ends up being your goal long-term, as the ROI on industry is definitely higher than research. I recommend this [document](https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf) to go down the rabbit hole of motivations behind a PhD.
* Someone sent me a [story](https://drive.google.com/file/d/15-oQKkuU-CDmzKcK1FT56GuK1V8KCcfG/view?usp=sharing) of someone else's PhD journey. Its a great story and was in part a factor of motivation for me to pursue research.

