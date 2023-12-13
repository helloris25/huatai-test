import { Y as SvelteComponentDev, Z as init, $ as safe_not_equal, a0 as dispatch_dev, a1 as assign, a2 as compute_rest_props, a3 as validate_slots, a4 as exclude_internal_props, a5 as svg_element, a6 as claim_svg_element, a7 as children, a8 as detach_dev, a9 as set_svg_attributes, aa as toggle_class, ab as add_location, ac as attr_dev, ad as insert_hydration_dev, ae as append_hydration_dev, af as get_spread_update, ag as noop, ah as construct_svelte_component_dev, ai as get_spread_object, aj as create_component, ak as empty, al as claim_component, am as mount_component, an as group_outros, ao as transition_out, ap as destroy_component, aq as check_outros, ar as transition_in, as as ensure_array_like_dev, at as validate_each_keys, au as createEventDispatcher, av as element, aw as claim_element, ax as listen_dev, ay as update_keyed_each, az as run_all, aA as destroy_block, aB as space, aC as claim_space, aD as logEvent, aE as binding_callbacks, aF as bind, aG as text, aH as get_svelte_dataset, aI as claim_text, aJ as set_style, aK as add_flush_callback, _ as __vitePreload, aL as createRouter, v as histoireConfig, aM as createWebHistory, aN as createWebHashHistory, aO as markRaw, K as reactive, d as defineComponent, r as ref, aP as watchEffect, o as openBlock, q as createBlock, aQ as mergeProps, aR as resolveDynamicComponent, h as createCommentVNode } from "./vendor-d0ae1662.js";
class MeterCalculator {
  constructor(min, max, maxLevel) {
    this.min = min;
    this.max = max;
    this.maxLevel = maxLevel;
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
const file$6 = "E:/projects/test-huatai/src/lib/common/icons/Sun.svelte";
function create_fragment$7(ctx) {
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
      toggle_class(path, "s-H7aMSDXkiNhB", true);
      add_location(path, file$6, 1, 4, 101);
      attr_dev(svg, "width", "24");
      attr_dev(svg, "height", "24");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$6, 0, 0, 0);
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
      toggle_class(path, "s-H7aMSDXkiNhB", true);
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
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Sun",
      options,
      id: create_fragment$7.name
    });
  }
}
const Moon_svelte_svelte_type_style_lang = "";
const file$5 = "E:/projects/test-huatai/src/lib/common/icons/Moon.svelte";
function create_fragment$6(ctx) {
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
      toggle_class(path, "s-APTsm3AgRqYS", true);
      add_location(path, file$5, 1, 4, 101);
      attr_dev(svg, "width", "20");
      attr_dev(svg, "height", "20");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      add_location(svg, file$5, 0, 0, 0);
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
      toggle_class(path, "s-APTsm3AgRqYS", true);
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
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Moon",
      options,
      id: create_fragment$6.name
    });
  }
}
const Icon_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    /*$$restProps*/
    ctx[1]
  ];
  var switch_value = icons[
    /*icon*/
    ctx[0]
  ];
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {};
    if (dirty !== void 0 && dirty & /*$$restProps*/
    2) {
      switch_instance_props = get_spread_update(switch_instance_spread_levels, [get_spread_object(
        /*$$restProps*/
        ctx2[1]
      )]);
    } else {
      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }
    }
    return {
      props: switch_instance_props,
      $$inline: true
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx));
  }
  const block = {
    c: function create() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*icon*/
      1 && switch_value !== (switch_value = icons[
        /*icon*/
        ctx2[0]
      ])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component_dev(switch_value, switch_props(ctx2, dirty));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = dirty & /*$$restProps*/
        2 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
          /*$$restProps*/
          ctx2[1]
        )]) : {};
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
const icons = { Sun, Moon };
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["icon"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Icon", slots, []);
  let { icon } = $$props;
  $$self.$$.on_mount.push(function() {
    if (icon === void 0 && !("icon" in $$props || $$self.$$.bound[$$self.$$.props["icon"]])) {
      console.warn("<Icon> was created without expected prop 'icon'");
    }
  });
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("icon" in $$new_props)
      $$invalidate(0, icon = $$new_props.icon);
  };
  $$self.$capture_state = () => ({ Moon, Sun, icons, icon });
  $$self.$inject_state = ($$new_props) => {
    if ("icon" in $$props)
      $$invalidate(0, icon = $$new_props.icon);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [icon, $$restProps];
}
class Icon extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { icon: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Icon",
      options,
      id: create_fragment$5.name
    });
  }
  get icon() {
    throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set icon(value) {
    throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const ScaleBar_svelte_svelte_type_style_lang = "";
const file$4 = "E:/projects/test-huatai/src/lib/ScaleBar/ScaleBar.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let button;
  let button_data_level_number_value;
  let button_aria_label_value;
  let mounted;
  let dispose;
  function mousemove_handler() {
    return (
      /*mousemove_handler*/
      ctx[16](
        /*levelNumber*/
        ctx[22]
      )
    );
  }
  function click_handler() {
    return (
      /*click_handler*/
      ctx[17](
        /*levelNumber*/
        ctx[22]
      )
    );
  }
  function mouseover_handler() {
    return (
      /*mouseover_handler*/
      ctx[18](
        /*levelNumber*/
        ctx[22]
      )
    );
  }
  function focus_handler() {
    return (
      /*focus_handler*/
      ctx[19](
        /*levelNumber*/
        ctx[22]
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
      attr_dev(button, "data-level-number", button_data_level_number_value = /*levelNumber*/
      ctx[22]);
      attr_dev(button, "class", "wrapperLevelLine resetButtonStyle s-gN1tEMrJV5Ar");
      attr_dev(button, "aria-label", button_aria_label_value = "Переключить на уровень " + /*levelNumber*/
      ctx[22]);
      toggle_class(
        button,
        "fillLevel",
        /*currentLevel*/
        ctx[1] >= /*levelNumber*/
        ctx[22]
      );
      toggle_class(
        button,
        "currentLevel",
        /*currentLevel*/
        ctx[1] === /*levelNumber*/
        ctx[22]
      );
      toggle_class(button, "nearLevel", Math.abs(
        /*currentLevel*/
        ctx[1] - /*levelNumber*/
        ctx[22]
      ) === 1);
      add_location(button, file$4, 74, 8, 1568);
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
            ctx[8],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "mouseup",
            /*onMouseUp*/
            ctx[9],
            false,
            false,
            false,
            false
          ),
          listen_dev(button, "mousemove", mousemove_handler, false, false, false, false),
          listen_dev(button, "click", click_handler, false, false, false, false),
          listen_dev(
            button,
            "touchend",
            /*stopInteractionBar*/
            ctx[4],
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
            ctx[4],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button,
            "blur",
            /*stopInteractionBar*/
            ctx[4],
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
      if (dirty & /*barsArray*/
      1 && button_data_level_number_value !== (button_data_level_number_value = /*levelNumber*/
      ctx[22])) {
        attr_dev(button, "data-level-number", button_data_level_number_value);
      }
      if (dirty & /*barsArray*/
      1 && button_aria_label_value !== (button_aria_label_value = "Переключить на уровень " + /*levelNumber*/
      ctx[22])) {
        attr_dev(button, "aria-label", button_aria_label_value);
      }
      if (dirty & /*currentLevel, barsArray*/
      3) {
        toggle_class(
          button,
          "fillLevel",
          /*currentLevel*/
          ctx[1] >= /*levelNumber*/
          ctx[22]
        );
      }
      if (dirty & /*currentLevel, barsArray*/
      3) {
        toggle_class(
          button,
          "currentLevel",
          /*currentLevel*/
          ctx[1] === /*levelNumber*/
          ctx[22]
        );
      }
      if (dirty & /*Math, currentLevel, barsArray*/
      3) {
        toggle_class(button, "nearLevel", Math.abs(
          /*currentLevel*/
          ctx[1] - /*levelNumber*/
          ctx[22]
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
    source: "(61:4) {#each barsArray as levelNumber (levelNumber + 1)}",
    ctx
  });
  return block;
}
function create_fragment$4(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let mounted;
  let dispose;
  let each_value = ensure_array_like_dev(
    /*barsArray*/
    ctx[0]
  );
  const get_key = (ctx2) => (
    /*levelNumber*/
    ctx2[22] + 1
  );
  validate_each_keys(ctx, each_value, get_each_context, get_key);
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "scaleBar s-gN1tEMrJV5Ar");
      add_location(div, file$4, 67, 0, 1372);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      if (!mounted) {
        dispose = [
          listen_dev(
            div,
            "touchmove",
            /*onTouchMove*/
            ctx[5],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            div,
            "touchstart",
            /*onTouchStart*/
            ctx[6],
            { passive: true },
            false,
            false,
            false
          ),
          listen_dev(
            div,
            "touchend",
            /*onTouchEnd*/
            ctx[7],
            { passive: true },
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      if (dirty & /*barsArray, currentLevel, Math, onMouseDown, onMouseUp, onMouseMove, changeLevel, stopInteractionBar, onInteractionBar*/
      1823) {
        each_value = ensure_array_like_dev(
          /*barsArray*/
          ctx2[0]
        );
        validate_each_keys(ctx2, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$4($$self, $$props, $$invalidate) {
  let currentLevel;
  let barsArray;
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("ScaleBar", slots, []);
  const dispatch = createEventDispatcher();
  let { countBars: countBars2 = 7 } = $$props;
  let { selectedLevel } = $$props;
  let hoveredLevel;
  let isHovered = false;
  let isMouseDown = false;
  let isTouchMove = false;
  function changeLevel(newLevel) {
    if (newLevel >= 1 && newLevel <= countBars2 && newLevel !== selectedLevel) {
      dispatch("changeValue", newLevel);
    }
  }
  function onInteractionBar(levelNumber) {
    $$invalidate(14, isHovered = true);
    $$invalidate(13, hoveredLevel = levelNumber);
  }
  function stopInteractionBar() {
    $$invalidate(14, isHovered = false);
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
    $$invalidate(15, isTouchMove = true);
  }
  function onTouchEnd() {
    $$invalidate(15, isTouchMove = false);
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
  $$self.$$.on_mount.push(function() {
    if (selectedLevel === void 0 && !("selectedLevel" in $$props || $$self.$$.bound[$$self.$$.props["selectedLevel"]])) {
      console.warn("<ScaleBar> was created without expected prop 'selectedLevel'");
    }
  });
  const writable_props = ["countBars", "selectedLevel"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ScaleBar> was created with unknown prop '${key}'`);
  });
  const mousemove_handler = (levelNumber) => onMouseMove(levelNumber);
  const click_handler = (levelNumber) => changeLevel(levelNumber);
  const mouseover_handler = (levelNumber) => onInteractionBar(levelNumber);
  const focus_handler = (levelNumber) => onInteractionBar(levelNumber);
  $$self.$$set = ($$props2) => {
    if ("countBars" in $$props2)
      $$invalidate(11, countBars2 = $$props2.countBars);
    if ("selectedLevel" in $$props2)
      $$invalidate(12, selectedLevel = $$props2.selectedLevel);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    dispatch,
    countBars: countBars2,
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
    barsArray,
    currentLevel
  });
  $$self.$inject_state = ($$props2) => {
    if ("countBars" in $$props2)
      $$invalidate(11, countBars2 = $$props2.countBars);
    if ("selectedLevel" in $$props2)
      $$invalidate(12, selectedLevel = $$props2.selectedLevel);
    if ("hoveredLevel" in $$props2)
      $$invalidate(13, hoveredLevel = $$props2.hoveredLevel);
    if ("isHovered" in $$props2)
      $$invalidate(14, isHovered = $$props2.isHovered);
    if ("isMouseDown" in $$props2)
      isMouseDown = $$props2.isMouseDown;
    if ("isTouchMove" in $$props2)
      $$invalidate(15, isTouchMove = $$props2.isTouchMove);
    if ("barsArray" in $$props2)
      $$invalidate(0, barsArray = $$props2.barsArray);
    if ("currentLevel" in $$props2)
      $$invalidate(1, currentLevel = $$props2.currentLevel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*isHovered, isTouchMove, hoveredLevel, selectedLevel*/
    61440) {
      $$invalidate(1, currentLevel = isHovered && !isTouchMove ? hoveredLevel : selectedLevel);
    }
    if ($$self.$$.dirty & /*countBars*/
    2048) {
      $$invalidate(0, barsArray = Array.from({ length: countBars2 }, (_, index) => index + 1));
    }
  };
  return [
    barsArray,
    currentLevel,
    changeLevel,
    onInteractionBar,
    stopInteractionBar,
    onTouchMove,
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    countBars2,
    selectedLevel,
    hoveredLevel,
    isHovered,
    isTouchMove,
    mousemove_handler,
    click_handler,
    mouseover_handler,
    focus_handler
  ];
}
class ScaleBar extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { countBars: 11, selectedLevel: 12 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ScaleBar",
      options,
      id: create_fragment$4.name
    });
  }
  get countBars() {
    throw new Error("<ScaleBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set countBars(value) {
    throw new Error("<ScaleBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get selectedLevel() {
    throw new Error("<ScaleBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set selectedLevel(value) {
    throw new Error("<ScaleBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const BrightnessMeter_svelte_svelte_type_style_lang = "";
const file$3 = "E:/projects/test-huatai/src/lib/BrightnessMeter/BrightnessMeter.svelte";
function create_fragment$3(ctx) {
  let div;
  let button0;
  let icon0;
  let t0;
  let scalebar;
  let t1;
  let button1;
  let icon1;
  let div_aria_valuetext_value;
  let current;
  let mounted;
  let dispose;
  const icon0_spread_levels = [{ icon: "Moon" }, getStyleControlByActive(!/*isReachedOptimum*/
  ctx[1])];
  let icon0_props = {};
  for (let i = 0; i < icon0_spread_levels.length; i += 1) {
    icon0_props = assign(icon0_props, icon0_spread_levels[i]);
  }
  icon0 = new Icon({ props: icon0_props, $$inline: true });
  scalebar = new ScaleBar({
    props: {
      countBars,
      selectedLevel: (
        /*currentLevel*/
        ctx[0]
      )
    },
    $$inline: true
  });
  scalebar.$on(
    "changeValue",
    /*changeValue_handler*/
    ctx[11]
  );
  const icon1_spread_levels = [{ icon: "Sun" }, getStyleControlByActive(
    /*isReachedOptimum*/
    ctx[1]
  )];
  let icon1_props = {};
  for (let i = 0; i < icon1_spread_levels.length; i += 1) {
    icon1_props = assign(icon1_props, icon1_spread_levels[i]);
  }
  icon1 = new Icon({ props: icon1_props, $$inline: true });
  const block = {
    c: function create() {
      div = element("div");
      button0 = element("button");
      create_component(icon0.$$.fragment);
      t0 = space();
      create_component(scalebar.$$.fragment);
      t1 = space();
      button1 = element("button");
      create_component(icon1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        role: true,
        "aria-label": true,
        "aria-valuemin": true,
        "aria-valuemax": true,
        "aria-valuenow": true,
        "aria-valuetext": true
      });
      var div_nodes = children(div);
      button0 = claim_element(div_nodes, "BUTTON", { class: true, "aria-label": true });
      var button0_nodes = children(button0);
      claim_component(icon0.$$.fragment, button0_nodes);
      button0_nodes.forEach(detach_dev);
      t0 = claim_space(div_nodes);
      claim_component(scalebar.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true, "aria-label": true });
      var button1_nodes = children(button1);
      claim_component(icon1.$$.fragment, button1_nodes);
      button1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "resetButtonStyle");
      attr_dev(button0, "aria-label", "сделать темнее");
      add_location(button0, file$3, 53, 4, 1448);
      attr_dev(button1, "class", "resetButtonStyle");
      attr_dev(button1, "aria-label", "сделать ярче");
      add_location(button1, file$3, 66, 4, 1842);
      attr_dev(div, "class", "brightnessMeter s-WciD-47wOc5D");
      attr_dev(div, "role", "slider");
      attr_dev(div, "aria-label", "Регулятор яркости");
      attr_dev(div, "aria-valuemin", 0);
      attr_dev(div, "aria-valuemax", countBars);
      attr_dev(
        div,
        "aria-valuenow",
        /*currentLevel*/
        ctx[0]
      );
      attr_dev(div, "aria-valuetext", div_aria_valuetext_value = "Уровень яркости " + /*currentLevel*/
      ctx[0]);
      add_location(div, file$3, 44, 0, 1182);
    },
    m: function mount(target, anchor) {
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, button0);
      mount_component(icon0, button0, null);
      append_hydration_dev(div, t0);
      mount_component(scalebar, div, null);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, button1);
      mount_component(icon1, button1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen_dev(
            button0,
            "click",
            /*click_handler*/
            ctx[10],
            false,
            false,
            false,
            false
          ),
          listen_dev(
            button1,
            "click",
            /*click_handler_1*/
            ctx[12],
            false,
            false,
            false,
            false
          )
        ];
        mounted = true;
      }
    },
    p: function update(ctx2, [dirty]) {
      const icon0_changes = dirty & /*getStyleControlByActive, isReachedOptimum*/
      2 ? get_spread_update(icon0_spread_levels, [
        icon0_spread_levels[0],
        get_spread_object(getStyleControlByActive(!/*isReachedOptimum*/
        ctx2[1]))
      ]) : {};
      icon0.$set(icon0_changes);
      const scalebar_changes = {};
      if (dirty & /*currentLevel*/
      1)
        scalebar_changes.selectedLevel = /*currentLevel*/
        ctx2[0];
      scalebar.$set(scalebar_changes);
      const icon1_changes = dirty & /*getStyleControlByActive, isReachedOptimum*/
      2 ? get_spread_update(icon1_spread_levels, [
        icon1_spread_levels[0],
        get_spread_object(getStyleControlByActive(
          /*isReachedOptimum*/
          ctx2[1]
        ))
      ]) : {};
      icon1.$set(icon1_changes);
      if (!current || dirty & /*currentLevel*/
      1) {
        attr_dev(
          div,
          "aria-valuenow",
          /*currentLevel*/
          ctx2[0]
        );
      }
      if (!current || dirty & /*currentLevel*/
      1 && div_aria_valuetext_value !== (div_aria_valuetext_value = "Уровень яркости " + /*currentLevel*/
      ctx2[0])) {
        attr_dev(div, "aria-valuetext", div_aria_valuetext_value);
      }
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon0.$$.fragment, local);
      transition_in(scalebar.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(scalebar.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(div);
      }
      destroy_component(icon0);
      destroy_component(scalebar);
      destroy_component(icon1);
      mounted = false;
      run_all(dispose);
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
const countBars = 7;
const controlStyleVariant = { active: "1", passive: "0.4" };
function getStyleControlByActive(isActiveControl) {
  return {
    "fill-opacity": isActiveControl ? controlStyleVariant.active : controlStyleVariant.passive
  };
}
function instance$3($$self, $$props, $$invalidate) {
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
  function changeLevel(newLevel) {
    if (newLevel >= 1 && newLevel <= countBars && newLevel !== currentLevel) {
      emitChangeLevel(newLevel);
    }
  }
  function emitChangeLevel(level) {
    dispatch("changeValue", meterCalculator.toMinMaxFromLevel(level));
  }
  const writable_props = ["value", "min", "max", "optimum"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<BrightnessMeter> was created with unknown prop '${key}'`);
  });
  const click_handler = () => changeLevel(currentLevel - 1);
  const changeValue_handler = ({ detail }) => changeLevel(detail);
  const click_handler_1 = () => changeLevel(currentLevel + 1);
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(4, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(5, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(6, optimum = $$props2.optimum);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    ScaleBar,
    Icon,
    MeterCalculator,
    countBars,
    controlStyleVariant,
    getStyleControlByActive,
    dispatch,
    value,
    min,
    max,
    optimum,
    changeLevel,
    emitChangeLevel,
    meterCalculator,
    currentLevel,
    optimumLevel,
    isReachedOptimum,
    ininLevel
  });
  $$self.$inject_state = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("min" in $$props2)
      $$invalidate(4, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(5, max = $$props2.max);
    if ("optimum" in $$props2)
      $$invalidate(6, optimum = $$props2.optimum);
    if ("meterCalculator" in $$props2)
      $$invalidate(7, meterCalculator = $$props2.meterCalculator);
    if ("currentLevel" in $$props2)
      $$invalidate(0, currentLevel = $$props2.currentLevel);
    if ("optimumLevel" in $$props2)
      $$invalidate(8, optimumLevel = $$props2.optimumLevel);
    if ("isReachedOptimum" in $$props2)
      $$invalidate(1, isReachedOptimum = $$props2.isReachedOptimum);
    if ("ininLevel" in $$props2)
      $$invalidate(9, ininLevel = $$props2.ininLevel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*min, max*/
    48) {
      $$invalidate(7, meterCalculator = new MeterCalculator(min, max, countBars));
    }
    if ($$self.$$.dirty & /*meterCalculator, value*/
    136) {
      $$invalidate(9, ininLevel = meterCalculator.toLevelFromMinMax(value));
    }
    if ($$self.$$.dirty & /*meterCalculator, optimum*/
    192) {
      $$invalidate(8, optimumLevel = meterCalculator.toLevelFromMinMax(optimum));
    }
    if ($$self.$$.dirty & /*ininLevel*/
    512) {
      $$invalidate(0, currentLevel = ininLevel);
    }
    if ($$self.$$.dirty & /*currentLevel, optimumLevel*/
    257) {
      $$invalidate(1, isReachedOptimum = currentLevel > optimumLevel);
    }
  };
  return [
    currentLevel,
    isReachedOptimum,
    changeLevel,
    value,
    min,
    max,
    optimum,
    meterCalculator,
    optimumLevel,
    ininLevel,
    click_handler,
    changeValue_handler,
    click_handler_1
  ];
}
class BrightnessMeter extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { value: 3, min: 4, max: 5, optimum: 6 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter",
      options,
      id: create_fragment$3.name
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
const file$2 = "E:/projects/test-huatai/src/lib/BrightnessMeter/BrightnessMeter.story.svelte";
function create_default_slot$2(ctx) {
  let brightnessmeter;
  let t0;
  let div;
  let br0;
  let t1;
  let strong0;
  let textContent = "BrightnessMeter";
  let t3;
  let p0;
  let strong1;
  let textContent_1 = "Props:";
  let t5;
  let ul0;
  let li0;
  let strong2;
  let textContent_2 = "min: number = 0";
  let t7;
  let t8;
  let li1;
  let strong3;
  let textContent_3 = "max: number = 1";
  let t10;
  let t11;
  let li2;
  let strong4;
  let textContent_4 = "value: number = 0";
  let t13;
  let t14;
  let li3;
  let strong5;
  let textContent_5 = "optimum: number = 0.65";
  let t16;
  let t17;
  let br1;
  let t18;
  let p1;
  let strong6;
  let textContent_6 = "Events:";
  let t20;
  let ul1;
  let li4;
  let strong7;
  let textContent_7 = "changeValue(value: number): void";
  let t22;
  let t23;
  let br2;
  let t24;
  let p2;
  let strong8;
  let textContent_8 = "Особености";
  let t26;
  let ul2;
  let li5;
  let strong9;
  let textContent_9 = "Компонент адаптивен";
  let t28;
  let t29;
  let li6;
  let strong10;
  let textContent_10 = "Адаптирован для touch-устройств";
  let t31;
  let t32;
  let li7;
  let strong11;
  let textContent_11 = "Accessibility";
  let t34;
  let i;
  let textContent_12 = 'Теги Button используются с целью повышения доступности, т.к. они нативно фокусируются при нажатии на\r\n                    клавишу Tab и "кликаются" при нажатии на пробел';
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
      create_component(brightnessmeter.$$.fragment);
      t0 = space();
      div = element("div");
      br0 = element("br");
      t1 = space();
      strong0 = element("strong");
      strong0.textContent = textContent;
      t3 = text(" - компонент для изменения яркости.\r\n\r\n        ");
      p0 = element("p");
      strong1 = element("strong");
      strong1.textContent = textContent_1;
      t5 = space();
      ul0 = element("ul");
      li0 = element("li");
      strong2 = element("strong");
      strong2.textContent = textContent_2;
      t7 = text(" - минимальное значение шкалы");
      t8 = space();
      li1 = element("li");
      strong3 = element("strong");
      strong3.textContent = textContent_3;
      t10 = text(" - мфксимальное значение шкалы");
      t11 = space();
      li2 = element("li");
      strong4 = element("strong");
      strong4.textContent = textContent_4;
      t13 = text(" - текущее значение");
      t14 = space();
      li3 = element("li");
      strong5 = element("strong");
      strong5.textContent = textContent_5;
      t16 = text(" - значение при котором будет изменяться цвет кнопок");
      t17 = space();
      br1 = element("br");
      t18 = space();
      p1 = element("p");
      strong6 = element("strong");
      strong6.textContent = textContent_6;
      t20 = space();
      ul1 = element("ul");
      li4 = element("li");
      strong7 = element("strong");
      strong7.textContent = textContent_7;
      t22 = text(" - происходит когда изменяется значение. В него передаётся\r\n        новое значение в рамках min и max");
      t23 = space();
      br2 = element("br");
      t24 = space();
      p2 = element("p");
      strong8 = element("strong");
      strong8.textContent = textContent_8;
      t26 = space();
      ul2 = element("ul");
      li5 = element("li");
      strong9 = element("strong");
      strong9.textContent = textContent_9;
      t28 = text(" - breakpoint 320");
      t29 = space();
      li6 = element("li");
      strong10 = element("strong");
      strong10.textContent = textContent_10;
      t31 = text(" - обрабаываем касания, шкала изменяется при свайпе");
      t32 = space();
      li7 = element("li");
      strong11 = element("strong");
      strong11.textContent = textContent_11;
      t34 = text(" - доступен для людей с ограниченными возможностями, проставлены все\r\n                необхадимые теги.\r\n                ");
      i = element("i");
      i.textContent = textContent_12;
      this.h();
    },
    l: function claim(nodes) {
      claim_component(brightnessmeter.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      br0 = claim_element(div_nodes, "BR", {});
      t1 = claim_space(div_nodes);
      strong0 = claim_element(div_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong0) !== "svelte-9irroi")
        strong0.textContent = textContent;
      t3 = claim_text(div_nodes, " - компонент для изменения яркости.\r\n\r\n        ");
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      strong1 = claim_element(p0_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong1) !== "svelte-jb0iik")
        strong1.textContent = textContent_1;
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      strong2 = claim_element(li0_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong2) !== "svelte-p9tdmm")
        strong2.textContent = textContent_2;
      t7 = claim_text(li0_nodes, " - минимальное значение шкалы");
      li0_nodes.forEach(detach_dev);
      t8 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      strong3 = claim_element(li1_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong3) !== "svelte-1976jvl")
        strong3.textContent = textContent_3;
      t10 = claim_text(li1_nodes, " - мфксимальное значение шкалы");
      li1_nodes.forEach(detach_dev);
      t11 = claim_space(ul0_nodes);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      strong4 = claim_element(li2_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong4) !== "svelte-i039gp")
        strong4.textContent = textContent_4;
      t13 = claim_text(li2_nodes, " - текущее значение");
      li2_nodes.forEach(detach_dev);
      t14 = claim_space(ul0_nodes);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      strong5 = claim_element(li3_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong5) !== "svelte-ebdj18")
        strong5.textContent = textContent_5;
      t16 = claim_text(li3_nodes, " - значение при котором будет изменяться цвет кнопок");
      li3_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      t17 = claim_space(div_nodes);
      br1 = claim_element(div_nodes, "BR", {});
      t18 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      strong6 = claim_element(p1_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong6) !== "svelte-1p55449")
        strong6.textContent = textContent_6;
      p1_nodes.forEach(detach_dev);
      t20 = claim_space(div_nodes);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li4 = claim_element(ul1_nodes, "LI", {});
      var li4_nodes = children(li4);
      strong7 = claim_element(li4_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong7) !== "svelte-1mb76wu")
        strong7.textContent = textContent_7;
      t22 = claim_text(li4_nodes, " - происходит когда изменяется значение. В него передаётся\r\n        новое значение в рамках min и max");
      li4_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      t23 = claim_space(div_nodes);
      br2 = claim_element(div_nodes, "BR", {});
      t24 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      strong8 = claim_element(p2_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong8) !== "svelte-1txzquh")
        strong8.textContent = textContent_8;
      p2_nodes.forEach(detach_dev);
      t26 = claim_space(div_nodes);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li5 = claim_element(ul2_nodes, "LI", {});
      var li5_nodes = children(li5);
      strong9 = claim_element(li5_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong9) !== "svelte-1yxdl0h")
        strong9.textContent = textContent_9;
      t28 = claim_text(li5_nodes, " - breakpoint 320");
      li5_nodes.forEach(detach_dev);
      t29 = claim_space(ul2_nodes);
      li6 = claim_element(ul2_nodes, "LI", {});
      var li6_nodes = children(li6);
      strong10 = claim_element(li6_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong10) !== "svelte-19pwf6q")
        strong10.textContent = textContent_10;
      t31 = claim_text(li6_nodes, " - обрабаываем касания, шкала изменяется при свайпе");
      li6_nodes.forEach(detach_dev);
      t32 = claim_space(ul2_nodes);
      li7 = claim_element(ul2_nodes, "LI", {});
      var li7_nodes = children(li7);
      strong11 = claim_element(li7_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong11) !== "svelte-1avoc5a")
        strong11.textContent = textContent_11;
      t34 = claim_text(li7_nodes, " - доступен для людей с ограниченными возможностями, проставлены все\r\n                необхадимые теги.\r\n                ");
      i = claim_element(li7_nodes, "I", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(i) !== "svelte-1anb3k")
        i.textContent = textContent_12;
      li7_nodes.forEach(detach_dev);
      ul2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(br0, file$2, 25, 8, 610);
      add_location(strong0, file$2, 26, 8, 624);
      add_location(strong1, file$2, 28, 11, 706);
      add_location(p0, file$2, 28, 8, 703);
      add_location(strong2, file$2, 30, 12, 761);
      add_location(li0, file$2, 30, 8, 757);
      add_location(strong3, file$2, 31, 12, 841);
      add_location(li1, file$2, 31, 8, 837);
      add_location(strong4, file$2, 32, 12, 922);
      add_location(li2, file$2, 32, 8, 918);
      add_location(strong5, file$2, 33, 12, 994);
      add_location(li3, file$2, 33, 8, 990);
      add_location(ul0, file$2, 29, 8, 743);
      add_location(br1, file$2, 35, 8, 1115);
      add_location(strong6, file$2, 36, 11, 1132);
      add_location(p1, file$2, 36, 8, 1129);
      add_location(strong7, file$2, 37, 16, 1178);
      add_location(li4, file$2, 37, 12, 1174);
      add_location(ul1, file$2, 37, 8, 1170);
      add_location(br2, file$2, 41, 8, 1360);
      add_location(strong8, file$2, 42, 11, 1377);
      add_location(p2, file$2, 42, 8, 1374);
      add_location(strong9, file$2, 45, 16, 1458);
      add_location(li5, file$2, 44, 12, 1436);
      add_location(strong10, file$2, 48, 16, 1566);
      add_location(li6, file$2, 47, 12, 1544);
      add_location(strong11, file$2, 51, 16, 1720);
      add_location(i, file$2, 53, 16, 1871);
      add_location(li7, file$2, 50, 12, 1698);
      add_location(ul2, file$2, 43, 8, 1418);
      set_style(div, "color", "rgb(244, 244, 244)");
      add_location(div, file$2, 24, 4, 561);
    },
    m: function mount(target, anchor) {
      mount_component(brightnessmeter, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, br0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, strong0);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, strong1);
      append_hydration_dev(div, t5);
      append_hydration_dev(div, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, strong2);
      append_hydration_dev(li0, t7);
      append_hydration_dev(ul0, t8);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, strong3);
      append_hydration_dev(li1, t10);
      append_hydration_dev(ul0, t11);
      append_hydration_dev(ul0, li2);
      append_hydration_dev(li2, strong4);
      append_hydration_dev(li2, t13);
      append_hydration_dev(ul0, t14);
      append_hydration_dev(ul0, li3);
      append_hydration_dev(li3, strong5);
      append_hydration_dev(li3, t16);
      append_hydration_dev(div, t17);
      append_hydration_dev(div, br1);
      append_hydration_dev(div, t18);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, strong6);
      append_hydration_dev(div, t20);
      append_hydration_dev(div, ul1);
      append_hydration_dev(ul1, li4);
      append_hydration_dev(li4, strong7);
      append_hydration_dev(li4, t22);
      append_hydration_dev(div, t23);
      append_hydration_dev(div, br2);
      append_hydration_dev(div, t24);
      append_hydration_dev(div, p2);
      append_hydration_dev(p2, strong8);
      append_hydration_dev(div, t26);
      append_hydration_dev(div, ul2);
      append_hydration_dev(ul2, li5);
      append_hydration_dev(li5, strong9);
      append_hydration_dev(li5, t28);
      append_hydration_dev(ul2, t29);
      append_hydration_dev(ul2, li6);
      append_hydration_dev(li6, strong10);
      append_hydration_dev(li6, t31);
      append_hydration_dev(ul2, t32);
      append_hydration_dev(ul2, li7);
      append_hydration_dev(li7, strong11);
      append_hydration_dev(li7, t34);
      append_hydration_dev(li7, i);
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
        detach_dev(t0);
        detach_dev(div);
      }
      destroy_component(brightnessmeter, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$2.name,
    type: "slot",
    source: '(13:0) <Hst.Story title=\\"BrightnessMeter\\" responsiveDisabled>',
    ctx
  });
  return block;
}
function create_controls_slot$2(ctx) {
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
    id: create_controls_slot$2.name,
    type: "slot",
    source: '(61:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$2(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "BrightnessMeter",
      responsiveDisabled: true,
      $$slots: {
        controls: [create_controls_slot$2],
        default: [create_default_slot$2]
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
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$2($$self, $$props, $$invalidate) {
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
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "BrightnessMeter_story",
      options,
      id: create_fragment$2.name
    });
  }
  get Hst() {
    throw new Error("<BrightnessMeter_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<BrightnessMeter_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file$1 = "E:/projects/test-huatai/src/lib/Icon/Icon.story.svelte";
function create_default_slot$1(ctx) {
  let icon_1;
  let t0;
  let div;
  let br;
  let t1;
  let strong0;
  let textContent = "Icon";
  let t3;
  let p;
  let strong1;
  let textContent_1 = "Props:";
  let t5;
  let ul;
  let li;
  let strong2;
  let textContent_2 = "icon: IconType";
  let t7;
  let current;
  icon_1 = new Icon({
    props: { icon: (
      /*icon*/
      ctx[1]
    ) },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(icon_1.$$.fragment);
      t0 = space();
      div = element("div");
      br = element("br");
      t1 = space();
      strong0 = element("strong");
      strong0.textContent = textContent;
      t3 = text(" - компонент для отображения доступных иконок.\r\n\r\n    ");
      p = element("p");
      strong1 = element("strong");
      strong1.textContent = textContent_1;
      t5 = space();
      ul = element("ul");
      li = element("li");
      strong2 = element("strong");
      strong2.textContent = textContent_2;
      t7 = text(" - Имя иконки из списка доступных иконок IconType");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(icon_1.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      br = claim_element(div_nodes, "BR", {});
      t1 = claim_space(div_nodes);
      strong0 = claim_element(div_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong0) !== "svelte-timuel")
        strong0.textContent = textContent;
      t3 = claim_text(div_nodes, " - компонент для отображения доступных иконок.\r\n\r\n    ");
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      strong1 = claim_element(p_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong1) !== "svelte-jb0iik")
        strong1.textContent = textContent_1;
      p_nodes.forEach(detach_dev);
      t5 = claim_space(div_nodes);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      li = claim_element(ul_nodes, "LI", {});
      var li_nodes = children(li);
      strong2 = claim_element(li_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong2) !== "svelte-b5eh4u")
        strong2.textContent = textContent_2;
      t7 = claim_text(li_nodes, " - Имя иконки из списка доступных иконок IconType");
      li_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(br, file$1, 17, 4, 273);
      add_location(strong0, file$1, 18, 4, 283);
      add_location(strong1, file$1, 20, 7, 361);
      add_location(p, file$1, 20, 4, 358);
      add_location(strong2, file$1, 22, 16, 420);
      add_location(li, file$1, 22, 12, 416);
      add_location(ul, file$1, 21, 8, 398);
      set_style(div, "color", "rgb(244, 244, 244)");
      add_location(div, file$1, 16, 4, 228);
    },
    m: function mount(target, anchor) {
      mount_component(icon_1, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, br);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, strong0);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, p);
      append_hydration_dev(p, strong1);
      append_hydration_dev(div, t5);
      append_hydration_dev(div, ul);
      append_hydration_dev(ul, li);
      append_hydration_dev(li, strong2);
      append_hydration_dev(li, t7);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const icon_1_changes = {};
      if (dirty & /*icon*/
      2)
        icon_1_changes.icon = /*icon*/
        ctx2[1];
      icon_1.$set(icon_1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(div);
      }
      destroy_component(icon_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot$1.name,
    type: "slot",
    source: '(10:0) <Hst.Story title=\\"Icon\\" responsiveDisabled>',
    ctx
  });
  return block;
}
function create_controls_slot$1(ctx) {
  let hst_select;
  let updating_value;
  let current;
  function hst_select_value_binding(value) {
    ctx[3](value);
  }
  let hst_select_props = { options: (
    /*iconOptions*/
    ctx[2]
  ) };
  if (
    /*icon*/
    ctx[1] !== void 0
  ) {
    hst_select_props.value = /*icon*/
    ctx[1];
  }
  hst_select = new /*Hst*/
  ctx[0].Select({ props: hst_select_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_select, "value", hst_select_value_binding));
  const block = {
    c: function create() {
      create_component(hst_select.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_select.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_select, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_select_changes = {};
      if (!updating_value && dirty & /*icon*/
      2) {
        updating_value = true;
        hst_select_changes.value = /*icon*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_select.$set(hst_select_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_select.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_select.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_select, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot$1.name,
    type: "slot",
    source: '(23:4) <svelte:fragment slot=\\"controls\\">',
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      title: "Icon",
      responsiveDisabled: true,
      $$slots: {
        controls: [create_controls_slot$1],
        default: [create_default_slot$1]
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
      if (dirty & /*$$scope, icon*/
      18) {
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
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Icon_story", slots, []);
  let { Hst } = $$props;
  let icon = "Sun";
  const iconOptions = { Moon: "Moon", Sun: "Sun" };
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<Icon_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Icon_story> was created with unknown prop '${key}'`);
  });
  function hst_select_value_binding(value) {
    icon = value;
    $$invalidate(1, icon);
  }
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({ Icon, Hst, icon, iconOptions });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("icon" in $$props2)
      $$invalidate(1, icon = $$props2.icon);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, icon, iconOptions, hst_select_value_binding];
}
class Icon_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Icon_story",
      options,
      id: create_fragment$1.name
    });
  }
  get Hst() {
    throw new Error("<Icon_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Icon_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const file = "E:/projects/test-huatai/src/lib/ScaleBar/ScaleBar.story.svelte";
function create_default_slot(ctx) {
  let scalebar;
  let t0;
  let div;
  let br0;
  let t1;
  let strong0;
  let textContent = "ScaleBar";
  let t3;
  let br1;
  let t4;
  let p0;
  let strong1;
  let textContent_1 = "Props:";
  let t6;
  let ul0;
  let li0;
  let strong2;
  let textContent_2 = "countBars: number";
  let t8;
  let t9;
  let li1;
  let strong3;
  let textContent_3 = "selectedLevel: number";
  let t11;
  let t12;
  let br2;
  let t13;
  let p1;
  let strong4;
  let textContent_4 = "Events:";
  let t15;
  let ul1;
  let li2;
  let strong5;
  let textContent_5 = "changeValue(value: number): void";
  let t17;
  let t18;
  let br3;
  let t19;
  let p2;
  let strong6;
  let textContent_6 = "Особености";
  let t21;
  let ul2;
  let li3;
  let strong7;
  let textContent_7 = "Компонент адаптивен";
  let t23;
  let t24;
  let li4;
  let strong8;
  let textContent_8 = "Адаптирован для touch-устройств";
  let t26;
  let t27;
  let li5;
  let strong9;
  let textContent_9 = "Accessibility";
  let t29;
  let i;
  let textContent_10 = 'Теги Button используются с целью повышения доступности, т.к. они нативно фокусируются при нажатии на\r\n                    клавишу Tab и "кликаются" при нажатии на пробел';
  let current;
  scalebar = new ScaleBar({
    props: {
      countBars: (
        /*countBars*/
        ctx[1]
      ),
      selectedLevel: (
        /*selectedLevel*/
        ctx[2]
      )
    },
    $$inline: true
  });
  scalebar.$on(
    "changeValue",
    /*changeValue_handler*/
    ctx[5]
  );
  const block = {
    c: function create() {
      create_component(scalebar.$$.fragment);
      t0 = space();
      div = element("div");
      br0 = element("br");
      t1 = space();
      strong0 = element("strong");
      strong0.textContent = textContent;
      t3 = text(" - интерактивная шкала\r\n        ");
      br1 = element("br");
      t4 = space();
      p0 = element("p");
      strong1 = element("strong");
      strong1.textContent = textContent_1;
      t6 = space();
      ul0 = element("ul");
      li0 = element("li");
      strong2 = element("strong");
      strong2.textContent = textContent_2;
      t8 = text(" - количество делений");
      t9 = space();
      li1 = element("li");
      strong3 = element("strong");
      strong3.textContent = textContent_3;
      t11 = text(" - выбранные деления");
      t12 = space();
      br2 = element("br");
      t13 = space();
      p1 = element("p");
      strong4 = element("strong");
      strong4.textContent = textContent_4;
      t15 = space();
      ul1 = element("ul");
      li2 = element("li");
      strong5 = element("strong");
      strong5.textContent = textContent_5;
      t17 = text(" - происходит когда изменяется значение. В него передаётся\r\n                новое количество выбранных делений");
      t18 = space();
      br3 = element("br");
      t19 = space();
      p2 = element("p");
      strong6 = element("strong");
      strong6.textContent = textContent_6;
      t21 = space();
      ul2 = element("ul");
      li3 = element("li");
      strong7 = element("strong");
      strong7.textContent = textContent_7;
      t23 = text(" - breakpoint 320");
      t24 = space();
      li4 = element("li");
      strong8 = element("strong");
      strong8.textContent = textContent_8;
      t26 = text(" - обрабаываем касания, шкала изменяется при свайпе");
      t27 = space();
      li5 = element("li");
      strong9 = element("strong");
      strong9.textContent = textContent_9;
      t29 = text(" - доступен для людей с ограниченными возможностями, проставлены все\r\n                необхадимые теги.\r\n                ");
      i = element("i");
      i.textContent = textContent_10;
      this.h();
    },
    l: function claim(nodes) {
      claim_component(scalebar.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      br0 = claim_element(div_nodes, "BR", {});
      t1 = claim_space(div_nodes);
      strong0 = claim_element(div_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong0) !== "svelte-1531uof")
        strong0.textContent = textContent;
      t3 = claim_text(div_nodes, " - интерактивная шкала\r\n        ");
      br1 = claim_element(div_nodes, "BR", {});
      t4 = claim_space(div_nodes);
      p0 = claim_element(div_nodes, "P", {});
      var p0_nodes = children(p0);
      strong1 = claim_element(p0_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong1) !== "svelte-jb0iik")
        strong1.textContent = textContent_1;
      p0_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      ul0 = claim_element(div_nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      strong2 = claim_element(li0_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong2) !== "svelte-1qsra78")
        strong2.textContent = textContent_2;
      t8 = claim_text(li0_nodes, " - количество делений");
      li0_nodes.forEach(detach_dev);
      t9 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      strong3 = claim_element(li1_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong3) !== "svelte-1f8wxo0")
        strong3.textContent = textContent_3;
      t11 = claim_text(li1_nodes, " - выбранные деления");
      li1_nodes.forEach(detach_dev);
      ul0_nodes.forEach(detach_dev);
      t12 = claim_space(div_nodes);
      br2 = claim_element(div_nodes, "BR", {});
      t13 = claim_space(div_nodes);
      p1 = claim_element(div_nodes, "P", {});
      var p1_nodes = children(p1);
      strong4 = claim_element(p1_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong4) !== "svelte-1p55449")
        strong4.textContent = textContent_4;
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(div_nodes);
      ul1 = claim_element(div_nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li2 = claim_element(ul1_nodes, "LI", {});
      var li2_nodes = children(li2);
      strong5 = claim_element(li2_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong5) !== "svelte-1mb76wu")
        strong5.textContent = textContent_5;
      t17 = claim_text(li2_nodes, " - происходит когда изменяется значение. В него передаётся\r\n                новое количество выбранных делений");
      li2_nodes.forEach(detach_dev);
      ul1_nodes.forEach(detach_dev);
      t18 = claim_space(div_nodes);
      br3 = claim_element(div_nodes, "BR", {});
      t19 = claim_space(div_nodes);
      p2 = claim_element(div_nodes, "P", {});
      var p2_nodes = children(p2);
      strong6 = claim_element(p2_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong6) !== "svelte-1txzquh")
        strong6.textContent = textContent_6;
      p2_nodes.forEach(detach_dev);
      t21 = claim_space(div_nodes);
      ul2 = claim_element(div_nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li3 = claim_element(ul2_nodes, "LI", {});
      var li3_nodes = children(li3);
      strong7 = claim_element(li3_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong7) !== "svelte-1yxdl0h")
        strong7.textContent = textContent_7;
      t23 = claim_text(li3_nodes, " - breakpoint 320");
      li3_nodes.forEach(detach_dev);
      t24 = claim_space(ul2_nodes);
      li4 = claim_element(ul2_nodes, "LI", {});
      var li4_nodes = children(li4);
      strong8 = claim_element(li4_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong8) !== "svelte-19pwf6q")
        strong8.textContent = textContent_8;
      t26 = claim_text(li4_nodes, " - обрабаываем касания, шкала изменяется при свайпе");
      li4_nodes.forEach(detach_dev);
      t27 = claim_space(ul2_nodes);
      li5 = claim_element(ul2_nodes, "LI", {});
      var li5_nodes = children(li5);
      strong9 = claim_element(li5_nodes, "STRONG", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(strong9) !== "svelte-1avoc5a")
        strong9.textContent = textContent_9;
      t29 = claim_text(li5_nodes, " - доступен для людей с ограниченными возможностями, проставлены все\r\n                необхадимые теги.\r\n                ");
      i = claim_element(li5_nodes, "I", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(i) !== "svelte-1anb3k")
        i.textContent = textContent_10;
      li5_nodes.forEach(detach_dev);
      ul2_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(br0, file, 21, 8, 531);
      add_location(strong0, file, 22, 8, 545);
      add_location(br1, file, 23, 8, 602);
      add_location(strong1, file, 24, 11, 619);
      add_location(p0, file, 24, 8, 616);
      add_location(strong2, file, 26, 16, 678);
      add_location(li0, file, 26, 12, 674);
      add_location(strong3, file, 27, 16, 756);
      add_location(li1, file, 27, 12, 752);
      add_location(ul0, file, 25, 8, 656);
      add_location(br2, file, 29, 8, 844);
      add_location(strong4, file, 30, 11, 861);
      add_location(p1, file, 30, 8, 858);
      add_location(strong5, file, 32, 16, 921);
      add_location(li2, file, 32, 12, 917);
      add_location(ul1, file, 31, 8, 899);
      add_location(br3, file, 36, 8, 1112);
      add_location(strong6, file, 37, 11, 1129);
      add_location(p2, file, 37, 8, 1126);
      add_location(strong7, file, 40, 16, 1210);
      add_location(li3, file, 39, 12, 1188);
      add_location(strong8, file, 43, 16, 1318);
      add_location(li4, file, 42, 12, 1296);
      add_location(strong9, file, 46, 16, 1472);
      add_location(i, file, 48, 16, 1623);
      add_location(li5, file, 45, 12, 1450);
      add_location(ul2, file, 38, 8, 1170);
      set_style(div, "color", "rgb(244, 244, 244)");
      add_location(div, file, 20, 4, 482);
    },
    m: function mount(target, anchor) {
      mount_component(scalebar, target, anchor);
      insert_hydration_dev(target, t0, anchor);
      insert_hydration_dev(target, div, anchor);
      append_hydration_dev(div, br0);
      append_hydration_dev(div, t1);
      append_hydration_dev(div, strong0);
      append_hydration_dev(div, t3);
      append_hydration_dev(div, br1);
      append_hydration_dev(div, t4);
      append_hydration_dev(div, p0);
      append_hydration_dev(p0, strong1);
      append_hydration_dev(div, t6);
      append_hydration_dev(div, ul0);
      append_hydration_dev(ul0, li0);
      append_hydration_dev(li0, strong2);
      append_hydration_dev(li0, t8);
      append_hydration_dev(ul0, t9);
      append_hydration_dev(ul0, li1);
      append_hydration_dev(li1, strong3);
      append_hydration_dev(li1, t11);
      append_hydration_dev(div, t12);
      append_hydration_dev(div, br2);
      append_hydration_dev(div, t13);
      append_hydration_dev(div, p1);
      append_hydration_dev(p1, strong4);
      append_hydration_dev(div, t15);
      append_hydration_dev(div, ul1);
      append_hydration_dev(ul1, li2);
      append_hydration_dev(li2, strong5);
      append_hydration_dev(li2, t17);
      append_hydration_dev(div, t18);
      append_hydration_dev(div, br3);
      append_hydration_dev(div, t19);
      append_hydration_dev(div, p2);
      append_hydration_dev(p2, strong6);
      append_hydration_dev(div, t21);
      append_hydration_dev(div, ul2);
      append_hydration_dev(ul2, li3);
      append_hydration_dev(li3, strong7);
      append_hydration_dev(li3, t23);
      append_hydration_dev(ul2, t24);
      append_hydration_dev(ul2, li4);
      append_hydration_dev(li4, strong8);
      append_hydration_dev(li4, t26);
      append_hydration_dev(ul2, t27);
      append_hydration_dev(ul2, li5);
      append_hydration_dev(li5, strong9);
      append_hydration_dev(li5, t29);
      append_hydration_dev(li5, i);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const scalebar_changes = {};
      if (dirty & /*countBars*/
      2)
        scalebar_changes.countBars = /*countBars*/
        ctx2[1];
      if (dirty & /*selectedLevel*/
      4)
        scalebar_changes.selectedLevel = /*selectedLevel*/
        ctx2[2];
      scalebar.$set(scalebar_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(scalebar.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(scalebar.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t0);
        detach_dev(div);
      }
      destroy_component(scalebar, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(11:0) <Hst.Story title=\\"ScaleBar\\" responsiveDisabled>',
    ctx
  });
  return block;
}
function create_controls_slot(ctx) {
  let hst_number0;
  let updating_value;
  let t;
  let hst_number1;
  let updating_value_1;
  let current;
  function hst_number0_value_binding(value) {
    ctx[3](value);
  }
  let hst_number0_props = { title: "CountBars" };
  if (
    /*countBars*/
    ctx[1] !== void 0
  ) {
    hst_number0_props.value = /*countBars*/
    ctx[1];
  }
  hst_number0 = new /*Hst*/
  ctx[0].Number({ props: hst_number0_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number0, "value", hst_number0_value_binding));
  function hst_number1_value_binding(value) {
    ctx[4](value);
  }
  let hst_number1_props = { title: "selectedLevel" };
  if (
    /*selectedLevel*/
    ctx[2] !== void 0
  ) {
    hst_number1_props.value = /*selectedLevel*/
    ctx[2];
  }
  hst_number1 = new /*Hst*/
  ctx[0].Number({ props: hst_number1_props, $$inline: true });
  binding_callbacks.push(() => bind(hst_number1, "value", hst_number1_value_binding));
  const block = {
    c: function create() {
      create_component(hst_number0.$$.fragment);
      t = space();
      create_component(hst_number1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(hst_number0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(hst_number1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(hst_number0, target, anchor);
      insert_hydration_dev(target, t, anchor);
      mount_component(hst_number1, target, anchor);
      current = true;
    },
    p: function update(ctx2, dirty) {
      const hst_number0_changes = {};
      if (!updating_value && dirty & /*countBars*/
      2) {
        updating_value = true;
        hst_number0_changes.value = /*countBars*/
        ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      hst_number0.$set(hst_number0_changes);
      const hst_number1_changes = {};
      if (!updating_value_1 && dirty & /*selectedLevel*/
      4) {
        updating_value_1 = true;
        hst_number1_changes.value = /*selectedLevel*/
        ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      hst_number1.$set(hst_number1_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_number0.$$.fragment, local);
      transition_in(hst_number1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_number0.$$.fragment, local);
      transition_out(hst_number1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) {
        detach_dev(t);
      }
      destroy_component(hst_number0, detaching);
      destroy_component(hst_number1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_controls_slot.name,
    type: "slot",
    source: '(55:4) <svelte:fragment slot=\\"controls\\">',
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
      title: "ScaleBar",
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
      if (dirty & /*$$scope, selectedLevel, countBars*/
      70) {
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
  validate_slots("ScaleBar_story", slots, []);
  let { Hst } = $$props;
  let countBars2 = 7;
  let selectedLevel = 3;
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console.warn("<ScaleBar_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<ScaleBar_story> was created with unknown prop '${key}'`);
  });
  function hst_number0_value_binding(value) {
    countBars2 = value;
    $$invalidate(1, countBars2);
  }
  function hst_number1_value_binding(value) {
    selectedLevel = value;
    $$invalidate(2, selectedLevel);
  }
  const changeValue_handler = (event) => {
    $$invalidate(2, selectedLevel = event.detail);
    logEvent("changeValue", event);
  };
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    logEvent,
    ScaleBar,
    Hst,
    countBars: countBars2,
    selectedLevel
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
    if ("countBars" in $$props2)
      $$invalidate(1, countBars2 = $$props2.countBars);
    if ("selectedLevel" in $$props2)
      $$invalidate(2, selectedLevel = $$props2.selectedLevel);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [
    Hst,
    countBars2,
    selectedLevel,
    hst_number0_value_binding,
    hst_number1_value_binding,
    changeValue_handler
  ];
}
class ScaleBar_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "ScaleBar_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<ScaleBar_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<ScaleBar_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
let files = [
  { "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "path": ["BrightnessMeter"], "filePath": "src/lib/BrightnessMeter/BrightnessMeter.story.svelte", "story": { "id": "src-lib-brightnessmeter-brightnessmeter-story-svelte", "title": "BrightnessMeter", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "docsFilePath": "src\\lib\\BrightnessMeter\\BrightnessMeter.story.md", "index": 0, component: BrightnessMeter_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-brightnessmeter-brightnessmeter-story-svelte-c52bcdf5.js"), true ? [] : void 0) },
  { "id": "src-lib-icon-icon-story-svelte", "path": ["Icon"], "filePath": "src/lib/Icon/Icon.story.svelte", "story": { "id": "src-lib-icon-icon-story-svelte", "title": "Icon", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "index": 1, component: Icon_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-icon-icon-story-svelte-389225fc.js"), true ? [] : void 0) },
  { "id": "src-lib-scalebar-scalebar-story-svelte", "path": ["ScaleBar"], "filePath": "src/lib/ScaleBar/ScaleBar.story.svelte", "story": { "id": "src-lib-scalebar-scalebar-story-svelte", "title": "ScaleBar", "group": null, "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte4", "docsFilePath": "src\\lib\\ScaleBar\\ScaleBar.story.md", "index": 2, component: ScaleBar_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-lib-scalebar-scalebar-story-svelte-6e063fe2.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [] }, { "title": "BrightnessMeter", "index": 0 }, { "title": "Icon", "index": 1 }, { "title": "ScaleBar", "index": 2 }];
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
      component: () => __vitePreload(() => import("./HomeView.vue-1fc47f73.js"), true ? ["assets/HomeView.vue-1fc47f73.js","assets/vendor-d0ae1662.js","assets/story-8c2a6e85.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-6bc8f98d.js"), true ? ["assets/StoryView.vue-6bc8f98d.js","assets/vendor-d0ae1662.js","assets/story-8c2a6e85.js","assets/MobileOverlay.vue2-b212d6d8.js","assets/BaseEmpty.vue-1d6f30df.js","assets/state-ac083f7e.js","assets/events-47e5ee3e.js"] : void 0)
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
  "vanilla": () => __vitePreload(() => import("./vendor-d0ae1662.js").then((n) => n.bn), true ? [] : void 0),
  "svelte4": () => __vitePreload(() => import("./vendor-d0ae1662.js").then((n) => n.bo), true ? [] : void 0)
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
