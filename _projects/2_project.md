---
layout: page
title: Amundsen at Optum
description: Integrating Lyft's Amundsen as a data dictionary for internal Optum Oracle Databases
img: assets/img/amundsen_mark_orange.svg
importance: 2
category: Industry
giscus_comments: false
---

Amundsen is a platform for open source data discovery and also acts a metadata engine. It is an open-source project maintained by [Lyft](https://eng.lyft.com/amundsen-lyfts-data-discovery-metadata-engine-62d27254fbb9). When adopting Amundsen for Optum, some of the difficulties we had in translating our existing pipelines were unformatted data for our Oracle databases. A lot of the data dictionary that was provided by our third party contractor was stored in an Access Database, which in turn had no easy way to publicly view. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/landing_page.png" title="Homepage - Amundsen" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Amundsen allows for a easy to read search engine for finding out what tables you are working on.
</div>

However, since these workloads were stored using flat files, we were able to parse Access Databases using Python 3's ```pyodbc``` library. This allowed us to have official vendor definitions for fields and columns inside our databses. However, a lot of user defined or company defined tables using mandated queries needed to be processed and extracted

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/table_detail_page_with_badges.png" title="Visualization of a Hive Table in Amundsen" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Amundsen allows for easy user management, and gives a high level overview on data ownership, categorization, and column definitions/datatypes.
</div>

We found the solution by pitching idea to senior management and finding a client who would be interested in defining the tables and columns necessary. In addition, to having a verbose and rich user interface, Amundsen has many ways to extract data and put it into graph/ElasticSearch indices to consume on the frontend. It allows its developers to deliver small data dictionaries in CSV format to working with SQL databases which contain relational data for all the tables/instance you may want to include. Overall, its a versatile tool to have at any company with Big Data as they expand their Data Science/Processing capabilities.