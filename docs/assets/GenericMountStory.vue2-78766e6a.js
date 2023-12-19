import { Y as SvelteComponentDev, Z as init, $ as safe_not_equal, a0 as dispatch_dev, a1 as assign, a2 as compute_rest_props, a3 as validate_slots, a4 as exclude_internal_props, a5 as svg_element, a6 as claim_svg_element, a7 as children, a8 as detach_dev, a9 as set_svg_attributes, aa as add_location, ab as attr_dev, ac as insert_hydration_dev, ad as append_hydration_dev, ae as get_spread_update, af as noop, ag as ensure_array_like_dev, ah as validate_each_keys, ai as element, aj as create_component, ak as space, al as claim_element, am as claim_component, an as claim_space, ao as mount_component, ap as get_spread_object, aq as update_keyed_each, ar as transition_in, as as transition_out, at as destroy_component, au as get_svelte_dataset, av as toggle_class, aw as destroy_block, ax as logEvent, ay as binding_callbacks, az as bind, aA as set_style, aB as add_flush_callback, _ as __vitePreload, aC as createRouter, v as histoireConfig, aD as createWebHistory, aE as createWebHashHistory, aF as markRaw, K as reactive, d as defineComponent, r as ref, aG as watchEffect, o as openBlock, q as createBlock, aH as mergeProps, aI as resolveDynamicComponent, h as createCommentVNode } from "./vendor-3c886446.js";
const file$3 = "E:/projects/test-huatai/src/lib/BrightnessMeter/Sun.svelte";
function create_fragment$3(ctx) {
  let svg;
  let path;
  let path_levels = [
    /*$$restProps*/
    ctx[0],
    { fill: "white" },
    { "fill-rule": "evenodd" },
    { "clip-rule": "evenodd" },
    {
      d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V3ZM6.30711 4.89289C5.91658 4.50237 5.28342 4.50237 4.89289 4.89289C4.50237 5.28342 4.50237 5.91658 4.89289 6.30711L5.59289 7.00711C5.98342 7.39763 6.61658 7.39763 7.00711 7.00711C7.39763 6.61658 7.39763 5.98342 7.00711 5.59289L6.30711 4.89289ZM19.1071 6.30711C19.4976 5.91658 19.4976 5.28342 19.1071 4.89289C18.7166 4.50237 18.0834 4.50237 17.6929 4.89289L16.9929 5.59289C16.6024 5.98342 16.6024 6.61658 16.9929 7.00711C17.3834 7.39763 18.0166 7.39763 18.4071 7.00711L19.1071 6.30711ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20ZM7.00711 18.4071C7.39763 18.0166 7.39763 17.3834 7.00711 16.9929C6.61658 16.6024 5.98342 16.6024 5.59289 16.9929L4.89289 17.6929C4.50237 18.0834 4.50237 18.7166 4.89289 19.1071C5.28342 19.4976 5.91658 19.4976 6.30711 19.1071L7.00711 18.4071ZM18.4071 16.9929C18.0166 16.6024 17.3834 16.6024 16.9929 16.9929C16.6024 17.3834 16.6024 18.0166 16.9929 18.4071L17.6929 19.1071C18.0834 19.4976 18.7166 19.4976 19.1071 19.1071C19.4976 18.7166 19.4976 18.0834 19.1071 17.6929L18.4071 16.9929ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
    }
  ];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        fill: true,
        "fill-rule": true,
        "clip-rule": true,
        d: true
      });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(path, path_data);
      add_location(path, file$3, 1, 4, 101);
      attr_dev(svg, "width", "24");
      attr_dev(svg, "height", "24");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0],
        { fill: "white" },
        { "fill-rule": "evenodd" },
        { "clip-rule": "evenodd" },
        {
          d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4V3ZM6.30711 4.89289C5.91658 4.50237 5.28342 4.50237 4.89289 4.89289C4.50237 5.28342 4.50237 5.91658 4.89289 6.30711L5.59289 7.00711C5.98342 7.39763 6.61658 7.39763 7.00711 7.00711C7.39763 6.61658 7.39763 5.98342 7.00711 5.59289L6.30711 4.89289ZM19.1071 6.30711C19.4976 5.91658 19.4976 5.28342 19.1071 4.89289C18.7166 4.50237 18.0834 4.50237 17.6929 4.89289L16.9929 5.59289C16.6024 5.98342 16.6024 6.61658 16.9929 7.00711C17.3834 7.39763 18.0166 7.39763 18.4071 7.00711L19.1071 6.30711ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H20ZM7.00711 18.4071C7.39763 18.0166 7.39763 17.3834 7.00711 16.9929C6.61658 16.6024 5.98342 16.6024 5.59289 16.9929L4.89289 17.6929C4.50237 18.0834 4.50237 18.7166 4.89289 19.1071C5.28342 19.4976 5.91658 19.4976 6.30711 19.1071L7.00711 18.4071ZM18.4071 16.9929C18.0166 16.6024 17.3834 16.6024 16.9929 16.9929C16.6024 17.3834 16.6024 18.0166 16.9929 18.4071L17.6929 19.1071C18.0834 19.4976 18.7166 19.4976 19.1071 19.1071C19.4976 18.7166 19.4976 18.0834 19.1071 17.6929L18.4071 16.9929ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V20ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        }
      ]));
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Sun", slots, []);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
  };
  return [$$restProps];
}
class Sun extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Sun",
      options,
      id: create_fragment$3.name
    });
  }
}
const file$2 = "E:/projects/test-huatai/src/lib/BrightnessMeter/Moon.svelte";
function create_fragment$2(ctx) {
  let svg;
  let path;
  let path_levels = [
    /*$$restProps*/
    ctx[0],
    { fill: "white" },
    { "fill-rule": "evenodd" },
    { "clip-rule": "evenodd" },
    {
      d: "M17.3087 11.1735C17.6859 10.9964 18.0882 11.3677 17.983 11.7711C17.6242 13.1447 16.919 14.4519 15.8334 15.5375C12.6094 18.7611 7.45186 18.8285 4.31137 15.6883C1.17088 12.5482 1.23945 7.38999 4.46337 4.16641C5.54905 3.08084 6.8553 2.37579 8.23012 2.01698C8.63354 1.91186 9.00382 2.31409 8.82782 2.69118C7.68271 5.13543 8.0587 8.06304 9.99808 10.0022C11.9363 11.9425 14.8642 12.3185 17.3087 11.1735Z"
    }
  ];
  let path_data = {};
  for (let i = 0; i < path_levels.length; i += 1) {
    path_data = assign(path_data, path_levels[i]);
  }
  const block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        fill: true,
        xmlns: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        fill: true,
        "fill-rule": true,
        "clip-rule": true,
        d: true
      });
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_svg_attributes(path, path_data);
      add_location(path, file$2, 1, 4, 101);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, svg, anchor);
      append_hydration_dev(svg, path);
    },
    p: function update(ctx2, [dirty]) {
      set_svg_attributes(path, path_data = get_spread_update(path_levels, [
        dirty & /*$$restProps*/
        1 && /*$$restProps*/
        ctx2[0],
        { fill: "white" },
        { "fill-rule": "evenodd" },
        { "clip-rule": "evenodd" },
        {
          d: "M17.3087 11.1735C17.6859 10.9964 18.0882 11.3677 17.983 11.7711C17.6242 13.1447 16.919 14.4519 15.8334 15.5375C12.6094 18.7611 7.45186 18.8285 4.31137 15.6883C1.17088 12.5482 1.23945 7.38999 4.46337 4.16641C5.54905 3.08084 6.8553 2.37579 8.23012 2.01698C8.63354 1.91186 9.00382 2.31409 8.82782 2.69118C7.68271 5.13543 8.0587 8.06304 9.99808 10.0022C11.9363 11.9425 14.8642 12.3185 17.3087 11.1735Z"
        }
      ]));
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(svg);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Moon", slots, []);
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
  };
  return [$$restProps];
}
class Moon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Moon",
      options,
      id: create_fragment$2.name
    });
  }
}
const maxLevel = 7;
const minLevel = 1;
function convertValueToBars(value, min, max) {
  if (value >= max) {
    return maxLevel;
  }
  if (value <= min) {
    return minLevel;
  }
  const normalizedValue = (value - min) / (max - min);
  return Math.ceil(normalizedValue * maxLevel);
}
const BrightnessMeter_svelte_svelte_type_style_lang = "";
const file$1 = "E:/projects/test-huatai/src/lib/BrightnessMeter/BrightnessMeter.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let div;
  let textContent = ``;
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-u0ms15")
        div.innerHTML = textContent;
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "line s-WciD-47wOc5D");
      toggle_class(
        div,
        "fillLevel",
        /*level*/
        ctx[2] >= /*levelNumber*/
        ctx[5]
      );
      toggle_class(
        div,
        "currentLevel",
        /*level*/
        ctx[2] === /*levelNumber*/
        ctx[5]
      );
      toggle_class(div, "nearLevel", Math.abs(
        /*level*/
        ctx[2] - /*levelNumber*/
        ctx[5]
      ) === 1);
      add_location(div, file$1, 28, 12, 726);
      this.first = div;
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*level, barsArray*/
      4) {
        toggle_class(
          div,
          "fillLevel",
          /*level*/
          ctx[2] >= /*levelNumber*/
          ctx[5]
        );
      }
      if (dirty & /*level, barsArray*/
      4) {
        toggle_class(
          div,
          "currentLevel",
          /*level*/
          ctx[2] === /*levelNumber*/
          ctx[5]
        );
      }
      if (dirty & /*Math, level, barsArray*/
      4) {
        toggle_class(div, "nearLevel", Math.abs(
          /*level*/
          ctx[2] - /*levelNumber*/
          ctx[5]
        ) === 1);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(24:8) {#each barsArray as levelNumber (levelNumber + 1)}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div1;
  let moon;
  let t0;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t1;
  let sun;
  let current;
  const moon_spread_levels = [getStyleIconByActive(
    /*value*/
    ctx[0] < /*optimum*/
    ctx[1]
  )];
  let moon_props = {};
  for (let i = 0; i < moon_spread_levels.length; i += 1) {
    moon_props = assign(moon_props, moon_spread_levels[i]);
  }
  moon = new Moon({ props: moon_props, $$inline: true });
  let each_value = ensure_array_like_dev(barsArray);
  const get_key = (ctx2) => (
    /*levelNumber*/
    ctx2[5] + 1
  );
  validate_each_keys(ctx, each_value, get_each_context, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  const sun_spread_levels = [getStyleIconByActive(
    /*value*/
    ctx[0] >= /*optimum*/
    ctx[1]
  )];
  let sun_props = {};
  for (let i = 0; i < sun_spread_levels.length; i += 1) {
    sun_props = assign(sun_props, sun_spread_levels[i]);
  }
  sun = new Sun({ props: sun_props, $$inline: true });
  const block = {
    c: function create() {
      div1 = element("div");
      create_component(moon.$$.fragment);
      t0 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      create_component(sun.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(moon.$$.fragment, div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      claim_component(sun.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "bar s-WciD-47wOc5D");
      add_location(div0, file$1, 26, 4, 635);
      attr_dev(div1, "class", "brightnessMeter s-WciD-47wOc5D");
      add_location(div1, file$1, 23, 0, 541);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      mount_component(moon, div1, null);
      append_hydration_dev(div1, t0);
      append_hydration_dev(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration_dev(div1, t1);
      mount_component(sun, div1, null);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const moon_changes = dirty & /*getStyleIconByActive, value, optimum*/
      3 ? get_spread_update(moon_spread_levels, [
        get_spread_object(getStyleIconByActive(
          /*value*/
          ctx2[0] < /*optimum*/
          ctx2[1]
        ))
      ]) : {};
      moon.$set(moon_changes);
      if (dirty & /*level, barsArray, Math*/
      4) {
        each_value = ensure_array_like_dev(barsArray);
        validate_each_keys(ctx2, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
      }
      const sun_changes = dirty & /*getStyleIconByActive, value, optimum*/
      3 ? get_spread_update(sun_spread_levels, [
        get_spread_object(getStyleIconByActive(
          /*value*/
          ctx2[0] >= /*optimum*/
          ctx2[1]
        ))
      ]) : {};
      sun.$set(sun_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(moon.$$.fragment, local);
      transition_in(sun.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(moon.$$.fragment, local);
      transition_out(sun.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div1);
      }
      destroy_component(moon);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      destroy_component(sun);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const barsArray = Array.from({ length: maxLevel }, (_, index) => index + 1);
function getStyleIconByActive(isActiveIcon) {
  return {
    "fill-opacity": isActiveIcon ? "1" : "0.4"
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let level;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessMeter", slots, []);
  let { value = 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 1 } = $$props;
  let { optimum = 0.65 } = $$props;
  const writable_props = ["value", "min", "max", "optimum"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter> was created with unknown prop '${key}'`);
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(4, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(1, optimum = $$props2.optimum);
  };
  $$self.$capture_state = () => ({
    convertValueToBars,
    maxLevel,
    Moon,
    Sun,
    barsArray,
    getStyleIconByActive,
    value,
    min,
    max,
    optimum,
    level
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(3, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(4, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(1, optimum = $$props2.optimum);
    if ("level" in $$props2)
      $$invalidate(2, level = $$props2.level);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value, min, max*/
    25) {
      $$invalidate(2, level = convertValueToBars(value, min, max));
    }
  };
  return [value, optimum, level, min, max];
}
class BrightnessMeter extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { value: 0, min: 3, max: 4, optimum: 1 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter",
      options,
      id: create_fragment$1.name
    });
  }
  get value() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set value(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get min() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set min(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get max() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set max(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get optimum() {
    throw new Error("<BrightnessMeter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set optimum(value) {
    throw new Error("<BrightnessMeter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "E:/projects/test-huatai/src/lib/BrightnessMeter/BrightnessMeter.story.svelte";
function create_default_slot(ctx) {
  let div;
  let brightnessmeter;
  let current;
  brightnessmeter = new BrightnessMeter({
    props: {
      min: (
        /*min*/
        ctx[1]
      ),
      max: (
        /*max*/
        ctx[2]
      ),
      value: (
        /*value*/
        ctx[3]
      ),
      optimum: (
        /*optimum*/
        ctx[4]
      )
    },
    $$inline: true
  });
  brightnessmeter.$on(
    "changeValue",
    /*changeValue_handler*/
    ctx[9]
  );
  const block = {
    c: function create() {
      div = element("div");
      create_component(brightnessmeter.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      claim_component(brightnessmeter.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(div, "background", "#333");
      set_style(div, "padding", "25px");
      add_location(div, file, 13, 1, 277);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(brightnessmeter, div, null);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const brightnessmeter_changes = {};
      if (dirty & /*min*/
      2)
        brightnessmeter_changes.min = /*min*/
        ctx2[1];
      if (dirty & /*max*/
      4)
        brightnessmeter_changes.max = /*max*/
        ctx2[2];
      if (dirty & /*value*/
      8)
        brightnessmeter_changes.value = /*value*/
        ctx2[3];
      if (dirty & /*optimum*/
      16)
        brightnessmeter_changes.optimum = /*optimum*/
        ctx2[4];
      brightnessmeter.$set(brightnessmeter_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(brightnessmeter.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(brightnessmeter.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(brightnessmeter);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"BrightnessMeter\\" responsiveDisabled>',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_number0;
  let updating_value;
  let t0;
  let hst_number1;
  let updating_value_1;
  let t1;
  let hst_number2;
  let updating_value_2;
  let t2;
  let hst_number3;
  let updating_value_3;
  let current;
  function hst_number0_value_binding(value) {
    ctx[5](value);
  }
  let hst_number0_props = { title: "Min" };
  if (
    /*min*/
    ctx[1] !== void 0
  ) {
    hst_number0_props.value = /*min*/
    ctx[1];
  }
  hst_number0 = new /*Hst*/
  ctx[0].Number({ props: hst_number0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number0, "value", hst_number0_value_binding));
  function hst_number1_value_binding(value) {
    ctx[6](value);
  }
  let hst_number1_props = { title: "Max" };
  if (
    /*max*/
    ctx[2] !== void 0
  ) {
    hst_number1_props.value = /*max*/
    ctx[2];
  }
  hst_number1 = new /*Hst*/
  ctx[0].Number({ props: hst_number1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number1, "value", hst_number1_value_binding));
  function hst_number2_value_binding(value) {
    ctx[7](value);
  }
  let hst_number2_props = { title: "Value" };
  if (
    /*value*/
    ctx[3] !== void 0
  ) {
    hst_number2_props.value = /*value*/
    ctx[3];
  }
  hst_number2 = new /*Hst*/
  ctx[0].Number({ props: hst_number2_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number2, "value", hst_number2_value_binding));
  function hst_number3_value_binding(value) {
    ctx[8](value);
  }
  let hst_number3_props = { title: "Optimum" };
  if (
    /*optimum*/
    ctx[4] !== void 0
  ) {
    hst_number3_props.value = /*optimum*/
    ctx[4];
  }
  hst_number3 = new /*Hst*/
  ctx[0].Number({ props: hst_number3_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number3, "value", hst_number3_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number0.$$.fragment);
      t0 = space();
      create_component(hst_number1.$$.fragment);
      t1 = space();
      create_component(hst_number2.$$.fragment);
      t2 = space();
      create_component(hst_number3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_number0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(hst_number1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(hst_number2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(hst_number3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number0, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      mount_component(hst_number1, target, anchor);
      insert_hydration_dev(target, t1, anchor);
      mount_component(hst_number2, target, anchor);
      insert_hydration_dev(target, t2, anchor);
      mount_component(hst_number3, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number0_changes = {};
      if (!updating_value && dirty & /*min*/
      2) {
        updating_value = true;
        hst_number0_changes.value = /*min*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_number0.$set(hst_number0_changes);
      const hst_number1_changes = {};
      if (!updating_value_1 && dirty & /*max*/
      4) {
        updating_value_1 = true;
        hst_number1_changes.value = /*max*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_number1.$set(hst_number1_changes);
      const hst_number2_changes = {};
      if (!updating_value_2 && dirty & /*value*/
      8) {
        updating_value_2 = true;
        hst_number2_changes.value = /*value*/
        ctx2[3];
        add_flush_callback(() => updating_value_2 = false);
      }
      hst_number2.$set(hst_number2_changes);
      const hst_number3_changes = {};
      if (!updating_value_3 && dirty & /*optimum*/
      16) {
        updating_value_3 = true;
        hst_number3_changes.value = /*optimum*/
        ctx2[4];
        add_flush_callback(() => updating_value_3 = false);
      }
      hst_number3.$set(hst_number3_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number0.$$.fragment, local);
      transition_in(hst_number1.$$.fragment, local);
      transition_in(hst_number2.$$.fragment, local);
      transition_in(hst_number3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number0.$$.fragment, local);
      transition_out(hst_number1.$$.fragment, local);
      transition_out(hst_number2.$$.fragment, local);
      transition_out(hst_number3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(t1);
        detach_dev(t2);
      }
      destroy_component(hst_number0, detaching);
      destroy_component(hst_number1, detaching);
      destroy_component(hst_number2, detaching);
      destroy_component(hst_number3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(26:1) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "BrightnessMeter",
      responsiveDisabled: true,
      $$slots: {
        controls: [create_controls_slot],
        default: [create_default_slot]
      },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_story.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope, optimum, value, max, min*/
      1054) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessMeter_story", slots, []);
  let { Hst } = $$props;
  let min = 0;
  let max = 1;
  let value = 0.5;
  let optimum = 0.65;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<BrightnessMeter_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter_story> was created with unknown prop '${key}'`);
  });
  function hst_number0_value_binding(value2) {
    min = value2;
    $$invalidate(1, min);
  }
  function hst_number1_value_binding(value2) {
    max = value2;
    $$invalidate(2, max);
  }
  function hst_number2_value_binding(value$1) {
    value = value$1;
    $$invalidate(3, value);
  }
  function hst_number3_value_binding(value2) {
    optimum = value2;
    $$invalidate(4, optimum);
  }
  const changeValue_handler = (event) => {
    $$invalidate(3, value = event.detail);
    logEvent("changeValue", event);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    BrightnessMeter,
    Hst,
    min,
    max,
    value,
    optimum
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("min" in $$props2)
      $$invalidate(1, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(2, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("optimum" in $$props2)
      $$invalidate(4, optimum = $$props2.optimum);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    min,
    max,
    value,
    optimum,
    hst_number0_value_binding,
    hst_number1_value_binding,
    hst_number2_value_binding,
    hst_number3_value_binding,
    changeValue_handler
  ];
}
class BrightnessMeter_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<BrightnessMeter_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BrightnessMeter_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [{ "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "path": ["BrightnessMeter"], "filePath": "src/lib/BrightnessMeter/BrightnessMeter.story.svelte", "story": { "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "title": "BrightnessMeter", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "docsFilePath": "src\\lib\\BrightnessMeter\\BrightnessMeter.story.md", "index": 0, component: BrightnessMeter_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-brightnessmeter-brightnessmeter-story-svelte-459c239f.js"), true ? [] : void 0) }];
let tree = [{ "group": true, "id": "top", "title": "", "children": [] }, { "title": "BrightnessMeter", "index": 0 }];
const base = "/huatai-test/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-67a8da14.js"), true ? ["assets/HomeView.vue-67a8da14.js","assets/vendor-3c886446.js","assets/story-3aeaf920.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-37a92cee.js"), true ? ["assets/StoryView.vue-37a92cee.js","assets/vendor-3c886446.js","assets/story-3aeaf920.js","assets/MobileOverlay.vue2-f27f0193.js","assets/BaseEmpty.vue-d47a7edd.js","assets/state-9f046aa2.js","assets/events-d5d17681.js"] : void 0)
    }
  ]
});
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-3c886446.js").then((n) => n.be), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-3c886446.js").then((n) => n.bf), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};
