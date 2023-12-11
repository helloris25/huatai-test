import { Y as SvelteComponentDev, Z as init, $ as safe_not_equal, a0 as dispatch_dev, a1 as assign, a2 as compute_rest_props, a3 as validate_slots, a4 as exclude_internal_props, a5 as svg_element, a6 as claim_svg_element, a7 as children, a8 as detach_dev, a9 as set_svg_attributes, aa as toggle_class, ab as add_location, ac as attr_dev, ad as insert_hydration_dev, ae as append_hydration_dev, af as get_spread_update, ag as noop, ah as ensure_array_like_dev, ai as validate_each_keys, aj as createEventDispatcher, ak as element, al as create_component, am as space, an as claim_element, ao as claim_component, ap as claim_space, aq as mount_component, ar as listen_dev, as as get_spread_object, at as update_keyed_each, au as transition_in, av as transition_out, aw as destroy_component, ax as run_all, ay as destroy_block, az as logEvent, aA as binding_callbacks, aB as bind, aC as text, aD as get_svelte_dataset, aE as claim_text, aF as set_style, aG as add_flush_callback, _ as __vitePreload, aH as createRouter, v as histoireConfig, aI as createWebHistory, aJ as createWebHashHistory, aK as markRaw, K as reactive, d as defineComponent, r as ref, aL as watchEffect, o as openBlock, q as createBlock, aM as mergeProps, aN as resolveDynamicComponent, h as createCommentVNode } from "./vendor-538264f6.js";
class MeterCalculator {
  constructor(min, max, maxLevel2) {
    this.min = min;
    this.max = max;
    this.maxLevel = maxLevel2;
  }
  toLevelFromMinMax(valueInMinMax) {
    if (valueInMinMax >= this.max) {
      return this.maxLevel;
    }
    const normalizedValue = (valueInMinMax - this.min) / (this.max - this.min);
    return Math.floor(normalizedValue * this.maxLevel);
  }
  toMinMaxFromLevel(level) {
    const normalizedValue = level / this.maxLevel;
    const rawValue = normalizedValue * (this.max - this.min) + this.min;
    return this.clampValue(rawValue);
  }
  clampValue(value) {
    return Math.min(Math.max(value, this.min), this.max);
  }
}
const Sun_svelte_svelte_type_style_lang = "";
const file$3 = "E:/projects/test-huatai/src/lib/BrightnessMeter/icons/Sun.svelte";
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
      toggle_class(path, "s-fr9Nva7OWF3B", true);
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
      toggle_class(path, "s-fr9Nva7OWF3B", true);
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
const Moon_svelte_svelte_type_style_lang = "";
const file$2 = "E:/projects/test-huatai/src/lib/BrightnessMeter/icons/Moon.svelte";
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
      toggle_class(path, "s-7XFg2uvSipWh", true);
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
      toggle_class(path, "s-7XFg2uvSipWh", true);
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
const BrightnessMeter_svelte_svelte_type_style_lang = "";
const file$1 = "E:/projects/test-huatai/src/lib/BrightnessMeter/BrightnessMeter.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[30] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let button;
  let mounted;
  let dispose;
  function mousemove_handler() {
    return (
      /*mousemove_handler*/
      ctx[23](
        /*levelNumber*/
        ctx[30]
      )
    );
  }
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[24](
        /*levelNumber*/
        ctx[30]
      )
    );
  }
  function mouseover_handler() {
    return (
      /*mouseover_handler*/
      ctx[25](
        /*levelNumber*/
        ctx[30]
      )
    );
  }
  function focus_handler() {
    return (
      /*focus_handler*/
      ctx[26](
        /*levelNumber*/
        ctx[30]
      )
    );
  }
  const block = {
    key: key_1,
    first: null,
    c: function create() {
      button = element("button");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "data-level-number": true,
        class: true,
        "aria-label": true
      });
      var button_nodes = children(button);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(
        button,
        "data-level-number",
        /*levelNumber*/
        ctx[30]
      );
      attr_dev(button, "class", "wrapperLevelLine resetButtonStyle s-WciD-47wOc5D");
      attr_dev(button, "aria-label", "Сделать яркость с уровнем " + /*levelNumber*/
      ctx[30]);
      toggle_class(
        button,
        "fillLevel",
        /*currentLevel*/
        ctx[1] >= /*levelNumber*/
        ctx[30]
      );
      toggle_class(
        button,
        "currentLevel",
        /*currentLevel*/
        ctx[1] === /*levelNumber*/
        ctx[30]
      );
      toggle_class(button, "nearLevel", Math.abs(
        /*currentLevel*/
        ctx[1] - /*levelNumber*/
        ctx[30]
      ) === 1);
      add_location(button, file$1, 112, 12, 2819);
      this.first = button;
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, button, anchor);
      if (!mounted) {
        dispose = [
          listen_dev(
            button,
            "mousedown",
            /*onMouseDown*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "mouseup",
            /*onMouseUp*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "mousemove", mousemove_handler, false, false, false, false),
          listen_dev(button, "click", click_handler_1, false, false, false, false),
          listen_dev(
            button,
            "touchend",
            /*stopInteractionBar*/
            ctx[5],
            { passive: true },
            false,
            false,
            false
          ),
          listen_dev(button, "mouseover", mouseover_handler, false, false, false, false),
          listen_dev(button, "focus", focus_handler, false, false, false, false),
          listen_dev(
            button,
            "mouseout",
            /*stopInteractionBar*/
            ctx[5],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "blur",
            /*stopInteractionBar*/
            ctx[5],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*currentLevel*/
      2) {
        toggle_class(
          button,
          "fillLevel",
          /*currentLevel*/
          ctx[1] >= /*levelNumber*/
          ctx[30]
        );
      }
      if (dirty[0] & /*currentLevel*/
      2) {
        toggle_class(
          button,
          "currentLevel",
          /*currentLevel*/
          ctx[1] === /*levelNumber*/
          ctx[30]
        );
      }
      if (dirty[0] & /*currentLevel*/
      2) {
        toggle_class(button, "nearLevel", Math.abs(
          /*currentLevel*/
          ctx[1] - /*levelNumber*/
          ctx[30]
        ) === 1);
      }
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(button);
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(99:8) {#each barsArray as levelNumber (levelNumber + 1)}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div1;
  let button0;
  let moon;
  let t0;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t1;
  let button1;
  let sun;
  let div1_aria_valuetext_value;
  let current;
  let mounted;
  let dispose;
  const moon_spread_levels = [getStyleControlByActive(!/*isReachedOptimum*/
  ctx[2])];
  let moon_props = {};
  for (let i = 0; i < moon_spread_levels.length; i += 1) {
    moon_props = assign(moon_props, moon_spread_levels[i]);
  }
  moon = new Moon({ props: moon_props, $$inline: true });
  let each_value = ensure_array_like_dev(barsArray);
  const get_key = (ctx2) => (
    /*levelNumber*/
    ctx2[30] + 1
  );
  validate_each_keys(ctx, each_value, get_each_context, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  const sun_spread_levels = [getStyleControlByActive(
    /*isReachedOptimum*/
    ctx[2]
  )];
  let sun_props = {};
  for (let i = 0; i < sun_spread_levels.length; i += 1) {
    sun_props = assign(sun_props, sun_spread_levels[i]);
  }
  sun = new Sun({ props: sun_props, $$inline: true });
  const block = {
    c: function create() {
      div1 = element("div");
      button0 = element("button");
      create_component(moon.$$.fragment);
      t0 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      button1 = element("button");
      create_component(sun.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-label": true,
        "aria-valuemin": true,
        "aria-valuemax": true,
        "aria-valuenow": true,
        "aria-valuetext": true
      });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true, "aria-label": true });
      var button0_nodes = children(button0);
      claim_component(moon.$$.fragment, button0_nodes);
      button0_nodes.forEach(detach_dev);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true, "aria-label": true });
      var button1_nodes = children(button1);
      claim_component(sun.$$.fragment, button1_nodes);
      button1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "brightControl resetButtonStyle s-WciD-47wOc5D");
      attr_dev(button0, "aria-label", "сделать темнее");
      add_location(button0, file$1, 100, 4, 2380);
      attr_dev(div0, "class", "bar s-WciD-47wOc5D");
      add_location(div0, file$1, 107, 4, 2622);
      attr_dev(button1, "class", "brightControl resetButtonStyle s-WciD-47wOc5D");
      attr_dev(button1, "aria-label", "сделать ярче");
      add_location(button1, file$1, 132, 4, 3797);
      attr_dev(div1, "class", "brightnessMeter s-WciD-47wOc5D");
      attr_dev(div1, "role", "slider");
      attr_dev(div1, "aria-label", "Регулятор яркости");
      attr_dev(div1, "aria-valuemin", 0);
      attr_dev(div1, "aria-valuemax", maxLevel);
      attr_dev(
        div1,
        "aria-valuenow",
        /*selectedLevel*/
        ctx[0]
      );
      attr_dev(div1, "aria-valuetext", div1_aria_valuetext_value = "Уровень яркости " + /*selectedLevel*/
      ctx[0]);
      add_location(div1, file$1, 91, 0, 2122);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div1, anchor);
      append_hydration_dev(div1, button0);
      mount_component(moon, button0, null);
      append_hydration_dev(div1, t0);
      append_hydration_dev(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration_dev(div1, t1);
      append_hydration_dev(div1, button1);
      mount_component(sun, button1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[22],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            div0,
            "touchmove",
            /*onTouchMove*/
            ctx[6],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            div0,
            "touchstart",
            /*onTouchStart*/
            ctx[7],
            { passive: true },
            false,
            false,
            false
          ),
          listen_dev(
            div0,
            "touchend",
            /*onTouchEnd*/
            ctx[8],
            { passive: true },
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_2*/
            ctx[27],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      const moon_changes = dirty[0] & /*isReachedOptimum*/
      4 ? get_spread_update(moon_spread_levels, [get_spread_object(getStyleControlByActive(!/*isReachedOptimum*/
      ctx2[2]))]) : {};
      moon.$set(moon_changes);
      if (dirty[0] & /*currentLevel, onMouseDown, onMouseUp, onMouseMove, changeLevel, stopInteractionBar, onInteractionBar*/
      3642) {
        each_value = ensure_array_like_dev(barsArray);
        validate_each_keys(ctx2, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
      }
      const sun_changes = dirty[0] & /*isReachedOptimum*/
      4 ? get_spread_update(sun_spread_levels, [get_spread_object(getStyleControlByActive(
        /*isReachedOptimum*/
        ctx2[2]
      ))]) : {};
      sun.$set(sun_changes);
      if (!current || dirty[0] & /*selectedLevel*/
      1) {
        attr_dev(
          div1,
          "aria-valuenow",
          /*selectedLevel*/
          ctx2[0]
        );
      }
      if (!current || dirty[0] & /*selectedLevel*/
      1 && div1_aria_valuetext_value !== (div1_aria_valuetext_value = "Уровень яркости " + /*selectedLevel*/
      ctx2[0])) {
        attr_dev(div1, "aria-valuetext", div1_aria_valuetext_value);
      }
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
      mounted = false;
      run_all(dispose);
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
const maxLevel = 7;
const barsArray = Array.from({ length: maxLevel }, (_, index) => index + 1);
const controlStyleVariant = { active: "1", passive: "0.4" };
function getStyleControlByActive(isActiveControl) {
  return {
    "fill-opacity": isActiveControl ? controlStyleVariant.active : controlStyleVariant.passive
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let meterCalculator;
  let ininLevel;
  let optimumLevel;
  let currentLevel;
  let isReachedOptimum;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("BrightnessMeter", slots, []);
  const dispatch = createEventDispatcher();
  let { value = 0 } = $$props;
  let { min = 0 } = $$props;
  let { max = 1 } = $$props;
  let { optimum = 0.65 } = $$props;
  let selectedLevel;
  let hoveredLevel;
  let isHovered = false;
  let isMouseDown = false;
  let isTouchMove = false;
  function changeLevel(newLevel) {
    if (newLevel >= 1 && newLevel <= maxLevel && newLevel !== selectedLevel) {
      $$invalidate(0, selectedLevel = newLevel);
      dispatch("changeValue", meterCalculator.toMinMaxFromLevel(newLevel));
    }
  }
  function onInteractionBar(levelNumber) {
    $$invalidate(17, isHovered = true);
    $$invalidate(16, hoveredLevel = levelNumber);
  }
  function stopInteractionBar() {
    $$invalidate(17, isHovered = false);
  }
  function onTouchMove(event) {
    for (const touch of event.touches) {
      const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);
      const levelNumber = touchedElement.dataset.levelNumber;
      if (levelNumber) {
        changeLevel(Number(levelNumber));
      }
    }
  }
  function onTouchStart() {
    $$invalidate(18, isTouchMove = true);
  }
  function onTouchEnd() {
    $$invalidate(18, isTouchMove = false);
  }
  function onMouseDown() {
    isMouseDown = true;
  }
  function onMouseUp() {
    isMouseDown = false;
  }
  function onMouseMove(levelNumber) {
    if (isMouseDown && !isTouchMove) {
      changeLevel(Number(levelNumber));
    }
  }
  const writable_props = ["value", "min", "max", "optimum"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter> was created with unknown prop '${key}'`);
  });
  const click_handler = () => changeLevel(currentLevel - 1);
  const mousemove_handler = (levelNumber) => onMouseMove(levelNumber);
  const click_handler_1 = (levelNumber) => changeLevel(levelNumber);
  const mouseover_handler = (levelNumber) => onInteractionBar(levelNumber);
  const focus_handler = (levelNumber) => onInteractionBar(levelNumber);
  const click_handler_2 = () => changeLevel(currentLevel + 1);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(12, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(13, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(14, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(15, optimum = $$props2.optimum);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    Moon,
    Sun,
    MeterCalculator,
    maxLevel,
    barsArray,
    controlStyleVariant,
    getStyleControlByActive,
    dispatch,
    value,
    min,
    max,
    optimum,
    selectedLevel,
    hoveredLevel,
    isHovered,
    isMouseDown,
    isTouchMove,
    changeLevel,
    onInteractionBar,
    stopInteractionBar,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    meterCalculator,
    optimumLevel,
    currentLevel,
    isReachedOptimum,
    ininLevel
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(12, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(13, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(14, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(15, optimum = $$props2.optimum);
    if ("selectedLevel" in $$props2)
      $$invalidate(0, selectedLevel = $$props2.selectedLevel);
    if ("hoveredLevel" in $$props2)
      $$invalidate(16, hoveredLevel = $$props2.hoveredLevel);
    if ("isHovered" in $$props2)
      $$invalidate(17, isHovered = $$props2.isHovered);
    if ("isMouseDown" in $$props2)
      isMouseDown = $$props2.isMouseDown;
    if ("isTouchMove" in $$props2)
      $$invalidate(18, isTouchMove = $$props2.isTouchMove);
    if ("meterCalculator" in $$props2)
      $$invalidate(19, meterCalculator = $$props2.meterCalculator);
    if ("optimumLevel" in $$props2)
      $$invalidate(20, optimumLevel = $$props2.optimumLevel);
    if ("currentLevel" in $$props2)
      $$invalidate(1, currentLevel = $$props2.currentLevel);
    if ("isReachedOptimum" in $$props2)
      $$invalidate(2, isReachedOptimum = $$props2.isReachedOptimum);
    if ("ininLevel" in $$props2)
      $$invalidate(21, ininLevel = $$props2.ininLevel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*min, max*/
    24576) {
      $$invalidate(19, meterCalculator = new MeterCalculator(min, max, maxLevel));
    }
    if ($$self.$$.dirty[0] & /*meterCalculator, value*/
    528384) {
      $$invalidate(21, ininLevel = meterCalculator.toLevelFromMinMax(value));
    }
    if ($$self.$$.dirty[0] & /*meterCalculator, optimum*/
    557056) {
      $$invalidate(20, optimumLevel = meterCalculator.toLevelFromMinMax(optimum));
    }
    if ($$self.$$.dirty[0] & /*isHovered, isTouchMove, hoveredLevel, selectedLevel, ininLevel*/
    2555905) {
      $$invalidate(1, currentLevel = isHovered && !isTouchMove ? hoveredLevel : selectedLevel ?? ininLevel);
    }
    if ($$self.$$.dirty[0] & /*currentLevel, optimumLevel*/
    1048578) {
      $$invalidate(2, isReachedOptimum = currentLevel > optimumLevel);
    }
  };
  return [
    selectedLevel,
    currentLevel,
    isReachedOptimum,
    changeLevel,
    onInteractionBar,
    stopInteractionBar,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    value,
    min,
    max,
    optimum,
    hoveredLevel,
    isHovered,
    isTouchMove,
    meterCalculator,
    optimumLevel,
    ininLevel,
    click_handler,
    mousemove_handler,
    click_handler_1,
    mouseover_handler,
    focus_handler,
    click_handler_2
  ];
}
class BrightnessMeter extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { value: 12, min: 13, max: 14, optimum: 15 }, null, [-1, -1]);
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
  let t0;
  let br0;
  let t1;
  let strong0;
  let textContent = "BrightnessMeter";
  let t3;
  let strong1;
  let textContent_1 = "Props:";
  let t5;
  let strong2;
  let textContent_2 = "min: number = 0";
  let t7;
  let strong3;
  let textContent_3 = "max: number = 1";
  let t9;
  let strong4;
  let textContent_4 = "value: number = 0";
  let t11;
  let strong5;
  let textContent_5 = "optimum: number = 0.65";
  let t13;
  let br1;
  let t14;
  let strong6;
  let textContent_6 = "Events:";
  let t16;
  let strong7;
  let textContent_7 = "changeValue(value: number): void";
  let t18;
  let br2;
  let t19;
  let ul;
  let li0;
  let strong8;
  let textContent_8 = "Компонент адаптивен";
  let t21;
  let t22;
  let li1;
  let strong9;
  let textContent_9 = "Адаптирован для touch-устройств";
  let t24;
  let t25;
  let li2;
  let strong10;
  let textContent_10 = "Accessibility";
  let t27;
  let i;
  let textContent_11 = 'Теги Button используются с целью повышения доступности, т.к. они нативно фокусируются при нажатии на\r\n                клавишу Tab и "кликаются" при нажатии на пробел';
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
      t0 = space();
      br0 = element("br");
      t1 = space();
      strong0 = element("strong");
      strong0.textContent = textContent;
      t3 = text(" - компонент для изменения яркости.\r\n\r\n    ");
      strong1 = element("strong");
      strong1.textContent = textContent_1;
      t5 = space();
      strong2 = element("strong");
      strong2.textContent = textContent_2;
      t7 = text(" - минимальное значение шкалы\r\n    ");
      strong3 = element("strong");
      strong3.textContent = textContent_3;
      t9 = text(" - мфксимальное значение шкалы\r\n    ");
      strong4 = element("strong");
      strong4.textContent = textContent_4;
      t11 = text(" - текущее значение\r\n    ");
      strong5 = element("strong");
      strong5.textContent = textContent_5;
      t13 = text(" - значение при котором будет изменяться цвет кнопок\r\n    ");
      br1 = element("br");
      t14 = space();
      strong6 = element("strong");
      strong6.textContent = textContent_6;
      t16 = space();
      strong7 = element("strong");
      strong7.textContent = textContent_7;
      t18 = text(" - происходит когда изменяется значение. В него передаётся новое\r\n    значение в рамках min и max\r\n    ");
      br2 = element("br");
      t19 = space();
      ul = element("ul");
      li0 = element("li");
      strong8 = element("strong");
      strong8.textContent = textContent_8;
      t21 = text(" - breakpoint 320");
      t22 = space();
      li1 = element("li");
      strong9 = element("strong");
      strong9.textContent = textContent_9;
      t24 = text(" - обрабаываем касания, шкала изменяется при свайпе");
      t25 = space();
      li2 = element("li");
      strong10 = element("strong");
      strong10.textContent = textContent_10;
      t27 = text(" - доступен для людей с ограниченными возможностями, проставлены все\r\n            необхадимые теги.\r\n            ");
      i = element("i");
      i.textContent = textContent_11;
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      claim_component(brightnessmeter.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      t1 = claim_space(nodes);
      strong0 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong0) !== "svelte-9irroi")
        strong0.textContent = textContent;
      t3 = claim_text(nodes, " - компонент для изменения яркости.\r\n\r\n    ");
      strong1 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong1) !== "svelte-jb0iik")
        strong1.textContent = textContent_1;
      t5 = claim_space(nodes);
      strong2 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong2) !== "svelte-p9tdmm")
        strong2.textContent = textContent_2;
      t7 = claim_text(nodes, " - минимальное значение шкалы\r\n    ");
      strong3 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong3) !== "svelte-1976jvl")
        strong3.textContent = textContent_3;
      t9 = claim_text(nodes, " - мфксимальное значение шкалы\r\n    ");
      strong4 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong4) !== "svelte-i039gp")
        strong4.textContent = textContent_4;
      t11 = claim_text(nodes, " - текущее значение\r\n    ");
      strong5 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong5) !== "svelte-ebdj18")
        strong5.textContent = textContent_5;
      t13 = claim_text(nodes, " - значение при котором будет изменяться цвет кнопок\r\n    ");
      br1 = claim_element(nodes, "BR", {});
      t14 = claim_space(nodes);
      strong6 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong6) !== "svelte-1p55449")
        strong6.textContent = textContent_6;
      t16 = claim_space(nodes);
      strong7 = claim_element(nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong7) !== "svelte-1mb76wu")
        strong7.textContent = textContent_7;
      t18 = claim_text(nodes, " - происходит когда изменяется значение. В него передаётся новое\r\n    значение в рамках min и max\r\n    ");
      br2 = claim_element(nodes, "BR", {});
      t19 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      strong8 = claim_element(li0_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong8) !== "svelte-1yxdl0h")
        strong8.textContent = textContent_8;
      t21 = claim_text(li0_nodes, " - breakpoint 320");
      li0_nodes.forEach(detach_dev);
      t22 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      strong9 = claim_element(li1_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong9) !== "svelte-19pwf6q")
        strong9.textContent = textContent_9;
      t24 = claim_text(li1_nodes, " - обрабаываем касания, шкала изменяется при свайпе");
      li1_nodes.forEach(detach_dev);
      t25 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      strong10 = claim_element(li2_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong10) !== "svelte-1avoc5a")
        strong10.textContent = textContent_10;
      t27 = claim_text(li2_nodes, " - доступен для людей с ограниченными возможностями, проставлены все\r\n            необхадимые теги.\r\n            ");
      i = claim_element(li2_nodes, "I", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(i) !== "svelte-1uby38w")
        i.textContent = textContent_11;
      li2_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_style(div, "background", "#404040");
      add_location(div, file, 13, 4, 276);
      add_location(br0, file, 22, 4, 529);
      add_location(strong0, file, 23, 4, 539);
      add_location(strong1, file, 25, 4, 614);
      add_location(strong2, file, 26, 4, 643);
      add_location(strong3, file, 27, 4, 710);
      add_location(strong4, file, 28, 4, 778);
      add_location(strong5, file, 29, 4, 837);
      add_location(br1, file, 30, 4, 934);
      add_location(strong6, file, 31, 4, 944);
      add_location(strong7, file, 32, 4, 974);
      add_location(br2, file, 34, 4, 1126);
      add_location(strong8, file, 37, 12, 1168);
      add_location(li0, file, 36, 8, 1150);
      add_location(strong9, file, 40, 12, 1264);
      add_location(li1, file, 39, 8, 1246);
      add_location(strong10, file, 43, 12, 1406);
      add_location(i, file, 45, 12, 1549);
      add_location(li2, file, 42, 8, 1388);
      add_location(ul, file, 35, 4, 1136);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      mount_component(brightnessmeter, div, null);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, br0, anchor);
      insert_hydration_dev(target, t1, anchor);
      insert_hydration_dev(target, strong0, anchor);
      insert_hydration_dev(target, t3, anchor);
      insert_hydration_dev(target, strong1, anchor);
      insert_hydration_dev(target, t5, anchor);
      insert_hydration_dev(target, strong2, anchor);
      insert_hydration_dev(target, t7, anchor);
      insert_hydration_dev(target, strong3, anchor);
      insert_hydration_dev(target, t9, anchor);
      insert_hydration_dev(target, strong4, anchor);
      insert_hydration_dev(target, t11, anchor);
      insert_hydration_dev(target, strong5, anchor);
      insert_hydration_dev(target, t13, anchor);
      insert_hydration_dev(target, br1, anchor);
      insert_hydration_dev(target, t14, anchor);
      insert_hydration_dev(target, strong6, anchor);
      insert_hydration_dev(target, t16, anchor);
      insert_hydration_dev(target, strong7, anchor);
      insert_hydration_dev(target, t18, anchor);
      insert_hydration_dev(target, br2, anchor);
      insert_hydration_dev(target, t19, anchor);
      insert_hydration_dev(target, ul, anchor);
      append_hydration_dev(ul, li0);
      append_hydration_dev(li0, strong8);
      append_hydration_dev(li0, t21);
      append_hydration_dev(ul, t22);
      append_hydration_dev(ul, li1);
      append_hydration_dev(li1, strong9);
      append_hydration_dev(li1, t24);
      append_hydration_dev(ul, t25);
      append_hydration_dev(ul, li2);
      append_hydration_dev(li2, strong10);
      append_hydration_dev(li2, t27);
      append_hydration_dev(li2, i);
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
        detach_dev(t0);
        detach_dev(br0);
        detach_dev(t1);
        detach_dev(strong0);
        detach_dev(t3);
        detach_dev(strong1);
        detach_dev(t5);
        detach_dev(strong2);
        detach_dev(t7);
        detach_dev(strong3);
        detach_dev(t9);
        detach_dev(strong4);
        detach_dev(t11);
        detach_dev(strong5);
        detach_dev(t13);
        detach_dev(br1);
        detach_dev(t14);
        detach_dev(strong6);
        detach_dev(t16);
        detach_dev(strong7);
        detach_dev(t18);
        detach_dev(br2);
        detach_dev(t19);
        detach_dev(ul);
      }
      destroy_component(brightnessmeter);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"BrightnessMeter\\">',
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
    source: '(52:4) <svelte:fragment slot=\\"controls\\">',
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
  let max = 100;
  let value = 50;
  let optimum = 50;
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
  const changeValue_handler = (event) => logEvent("changeValue", event);
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
let files = [{ "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "path": ["BrightnessMeter"], "filePath": "src/lib/BrightnessMeter/BrightnessMeter.story.svelte", "story": { "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "title": "BrightnessMeter", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "docsFilePath": "src\\lib\\BrightnessMeter\\BrightnessMeter.story.md", "index": 0, component: BrightnessMeter_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-brightnessmeter-brightnessmeter-story-svelte-98542856.js"), true ? [] : void 0) }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-668b368e.js"), true ? ["assets/HomeView.vue-668b368e.js","assets/vendor-538264f6.js","assets/story-ee126bea.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-20ea2371.js"), true ? ["assets/StoryView.vue-20ea2371.js","assets/vendor-538264f6.js","assets/story-ee126bea.js","assets/MobileOverlay.vue2-db78c756.js","assets/BaseEmpty.vue-60661e20.js","assets/state-afb8081d.js","assets/events-2e39b081.js"] : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-538264f6.js").then((n) => n.bj), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-538264f6.js").then((n) => n.bk), true ? [] : void 0)
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