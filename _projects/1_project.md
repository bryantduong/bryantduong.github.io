---
layout: page
title: Airflow at Optum
description: Integrating a Pythonic open-source workflow management platform for data engineering pipelines.
img: assets/img/airflow_transparent.png
importance: 1
category: work
---

Airflow is a platform to schedule, author, and monitor workflows programmatically via Python 3. It is an open-source project maintained by the [Apache Software Foundation](https://github.com/apache). In Airflow, some of the difficulties we had in translating our existing pipelines were they were embedded into IBM Mainframe JCL and scheduled through the licensed built-in scheduler by IBM, TWSz and TWSD, which stood for Tivoli Workload Scheduler. However, since these workloads were embedded using COBOL and a proprietary scheduler made by IBM, we needed to find a workaround that Airflow DAGs could use to connect to IBM Mainframe servers directly and then access the COBOL/JCL directly via API or remote access.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/airflow-dag.jpg" title="Example of an Airflow DAG" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An Airflow DAG is programmaticaly structured with predecessors and successors that cannot execute until its predecessor is completed. In addition, it can run tasks in parallel using workers.
</div>

We found the solution using [Zowe](https://www.zowe.org/) which was an open-source mainframe project that could connect to z/OS systems such as Mainframe. In addition, using the ```subprocess``` library in Python3 could run Zowe CLI commands in a script, allowing us to run JCL. An example wrapper that has been released is [PyZowe](https://github.com/zowe/zowe-cli-sample-scripts/tree/master/python/pyzowe).

{% raw %}
```python
#sample code
import os
# example here, WIP
```
{% endraw %}
