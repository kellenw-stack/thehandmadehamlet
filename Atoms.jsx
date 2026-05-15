/** @jsx React.createElement */
/* eslint-disable */

const { useState } = React;

// ---------- Tiny atomics ----------

const stickerShadow = '0 3px 0 rgba(18,18,18,0.9)';
const cardShadow = '0 2px 0 rgba(18,18,18,0.9), 0 8px 24px rgba(31,134,173,0.10)';

const Button = ({ children, variant = 'primary', size = 'md', onClick, style = {} }) => {
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 999,
    border: '2.5px solid var(--ink-900)',
    boxShadow: stickerShadow,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'transform 120ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 120ms',
    color: 'var(--ink-900)',
  };
  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px' },
    md: { fontSize: 16, padding: '12px 22px' },
    lg: { fontSize: 20, padding: '16px 28px' },
  };
  const variants = {
    primary: { background: 'var(--mustard-300)' },
    sky: { background: 'var(--sky-200)' },
    pink: { background: 'var(--pink-200)' },
    ghost: { background: 'transparent' },
    dark: { background: 'var(--ink-900)', color: 'var(--ink-50)' },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'translateY(2px)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {children}
    </button>
  );
};

const Badge = ({ children, color = 'mustard', rotate = -3, style = {} }) => {
  const palette = {
    mustard: 'var(--mustard-100)',
    sky: 'var(--sky-100)',
    pink: 'var(--pink-100)',
    moss: '#e3f0d6',
    tomato: '#fbe0d6',
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-hand)',
        fontWeight: 700,
        fontSize: 15,
        padding: '4px 14px',
        borderRadius: 999,
        border: '1.5px solid var(--ink-900)',
        background: palette[color],
        boxShadow: '0 1.5px 0 rgba(18,18,18,0.9)',
        transform: `rotate(${rotate}deg)`,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
};

const Caption = ({ children, rotate = -2, style = {} }) => (
  <span
    style={{
      fontFamily: 'var(--font-hand)',
      fontSize: 18,
      color: 'var(--ink-700)',
      display: 'inline-block',
      transform: `rotate(${rotate}deg)`,
      ...style,
    }}
  >
    {children}
  </span>
);

const Eyebrow = ({ children, style = {} }) => (
  <div
    style={{
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--mustard-500)',
      ...style,
    }}
  >
    {children}
  </div>
);

// ---------- Logo lockup ----------

const Logo = ({ size = 'md' }) => {
  const scale = { sm: 1, md: 1.25, lg: 1.7 }[size];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * scale }}>
      <img
        src="./assets/logo-hamlet-pig.png"
        alt=""
        style={{ width: 34 * scale, height: 34 * scale, objectFit: 'contain', objectPosition: 'center' }}
      />
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          lineHeight: 0.95,
          fontSize: 18 * scale,
          letterSpacing: '-0.01em',
        }}
      >
        The Handmade
        <br />
        <span style={{ color: 'var(--mustard-400)' }}>Hamlet</span>
      </div>
    </div>
  );
};

// ---------- Top nav ----------

const NavBar = ({ activePage, onNav, cartCount }) => {
  const linkStyle = (key) => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 15,
    color: 'var(--ink-900)',
    textDecoration: 'none',
    position: 'relative',
    paddingBottom: 4,
    cursor: 'pointer',
    borderBottom: activePage === key ? '3px solid var(--mustard-300)' : '3px solid transparent',
  });
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--sky-200)',
        padding: '16px 40px',
        borderBottom: '2.5px solid var(--ink-900)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div onClick={() => onNav('shop')} style={{ cursor: 'pointer' }}>
        <Logo size="md" />
      </div>
      <div style={{ display: 'flex', gap: 28 }}>
        <a onClick={() => onNav('shop')} style={linkStyle('shop')}>Shop</a>
        <a onClick={() => onNav('build')} style={linkStyle('build')}>Build yours</a>
        <a onClick={() => onNav('shop')} style={linkStyle('workshop')}>The workshop</a>
        <a onClick={() => onNav('shop')} style={linkStyle('stories')}>Stories</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <IconBtn>♥</IconBtn>
        <IconBtn>⌕</IconBtn>
        <Button variant="primary" size="sm">Cart · {cartCount}</Button>
      </div>
    </nav>
  );
};

const IconBtn = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid var(--ink-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 0 rgba(18,18,18,0.9)',
      fontSize: 17,
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

// ---------- Fanny-pack illustration ----------

const Pack = ({ fabric = 'linen', strap = 'mustard', patches = [], size = 'lg' }) => {
  const w = { sm: 120, md: 200, lg: 320 }[size];
  const h = w * 0.55;
  return (
    <div style={{ position: 'relative', width: w, height: h + 30 }}>
      {/* strap */}
      <div
        style={{
          position: 'absolute',
          left: -14,
          right: -14,
          top: h * 0.16,
          height: 10,
          background: STRAPS[strap],
          border: '2.5px solid var(--ink-900)',
          borderRadius: 6,
        }}
      />
      {/* buckle */}
      <div
        style={{
          position: 'absolute',
          right: -22,
          top: h * 0.16 - 4,
          width: 24,
          height: 18,
          background: 'var(--ink-300)',
          border: '2px solid var(--ink-900)',
          borderRadius: 4,
        }}
      />
      {/* body */}
      <div
        style={{
          width: w,
          height: h,
          borderRadius: '46% 50% 48% 52% / 56% 54% 46% 44%',
          border: '2.5px solid var(--ink-900)',
          background: FABRICS[fabric],
          boxShadow: 'inset 0 -10px 0 rgba(0,0,0,0.07), 0 4px 0 rgba(18,18,18,0.9)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* zipper line */}
        <div
          style={{
            position: 'absolute',
            left: '12%',
            right: '12%',
            top: '54%',
            height: 2,
            background: 'var(--ink-900)',
            opacity: 0.5,
            backgroundImage: 'repeating-linear-gradient(90deg, var(--ink-900) 0 4px, transparent 4px 7px)',
          }}
        />
        {/* zipper pull */}
        <div
          style={{
            position: 'absolute',
            right: '14%',
            top: '50%',
            width: 10,
            height: 14,
            background: 'var(--mustard-300)',
            border: '1.5px solid var(--ink-900)',
            borderRadius: 3,
          }}
        />
        {/* patches */}
        {patches.map((p, i) => (
          <PatchOnPack key={i} type={p} idx={i} />
        ))}
      </div>
    </div>
  );
};

const FABRICS = {
  linen: 'repeating-linear-gradient(45deg, #e8dfc6 0 3px, #d6c8a4 3px 6px)',
  gingham:
    'repeating-linear-gradient(0deg, rgba(207,106,137,0.6) 0 8px, transparent 8px 16px), repeating-linear-gradient(90deg, rgba(207,106,137,0.6) 0 8px, transparent 8px 16px), #fff',
  stripe: 'repeating-linear-gradient(0deg, var(--sky-200) 0 10px, #fff 10px 20px)',
  polka: 'radial-gradient(var(--ink-900) 22%, transparent 24%) 0 0/14px 14px, var(--mustard-200)',
  floral:
    'radial-gradient(circle at 25% 25%, var(--pink-300) 7px, transparent 8px), radial-gradient(circle at 75% 60%, var(--mustard-300) 6px, transparent 7px), radial-gradient(circle at 50% 90%, var(--moss-300) 5px, transparent 6px), var(--sky-100)',
  denim:
    'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 4px), #2c5b8a',
  mustard: 'var(--mustard-300)',
  pink: 'var(--pink-300)',
};

const STRAPS = {
  mustard: 'var(--mustard-300)',
  ink: 'var(--ink-900)',
  pink: 'var(--pink-300)',
  sky: 'var(--sky-300)',
  rope: 'repeating-linear-gradient(-45deg, #c9a273 0 4px, #a47a4d 4px 8px)',
};

const PATCH_DEFS = {
  star: { glyph: '★', bg: 'var(--mustard-300)' },
  moon: { glyph: '☾', bg: 'var(--sky-200)' },
  heart: { glyph: '♥', bg: 'var(--pink-200)' },
  skull: { glyph: '☠', bg: 'var(--ink-50)' },
  bolt: { glyph: '⚡', bg: 'var(--mustard-200)' },
  flower: { glyph: '✿', bg: 'var(--moss-300)' },
  bee: { glyph: '🐝', bg: '#fce9a8' },
  brave: { glyph: 'brave', bg: 'var(--mustard-300)', word: true },
  not2b: { glyph: 'not 2B', bg: 'var(--pink-200)', word: true },
};

const PatchOnPack = ({ type, idx }) => {
  const def = PATCH_DEFS[type] || PATCH_DEFS.star;
  const positions = [
    { left: '14%', top: '14%', rot: -10 },
    { right: '18%', top: '12%', rot: 8 },
    { left: '40%', top: '20%', rot: -3 },
    { left: '20%', top: '36%', rot: 6 },
  ];
  const pos = positions[idx % positions.length];
  if (def.word) {
    return (
      <div
        style={{
          position: 'absolute',
          ...pos,
          transform: `rotate(${pos.rot}deg)`,
          background: def.bg,
          border: '2px solid var(--ink-900)',
          borderRadius: 14,
          padding: '4px 10px',
          fontFamily: 'var(--font-hand)',
          fontWeight: 700,
          fontSize: 12,
          color: 'var(--ink-900)',
          boxShadow: '0 1.5px 0 rgba(18,18,18,0.9)',
        }}
      >
        {def.glyph}
      </div>
    );
  }
  return (
    <div
      style={{
        position: 'absolute',
        ...pos,
        transform: `rotate(${pos.rot}deg)`,
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: def.bg,
        border: '2px dashed var(--ink-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--ink-900)',
      }}
    >
      {def.glyph}
    </div>
  );
};

// Export to window
Object.assign(window, {
  Button, Badge, Caption, Eyebrow, Logo, NavBar, IconBtn, Pack,
  FABRICS, STRAPS, PATCH_DEFS, PatchOnPack,
  stickerShadow, cardShadow,
});
