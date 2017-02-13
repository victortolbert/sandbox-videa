---
title: Icon Component
---

Choose the icon you need from this page, then follow the implementation instructions on the [icon component][] page.

<ol class="vui-grid vui-wrap">
{%- for icon in icons -%}
  <li class="l-grid__item">
    {% render '@icon', { name: icon } -%}
  </li>
{%- endfor -%}
</ol>

[1]: link-to-icon-component-page
