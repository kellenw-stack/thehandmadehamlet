/** @jsx React.createElement */
/* eslint-disable */

// Marketing landing / shop browse page
const ShopPage = ({ onNav, onAddToCart }) => {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* HERO */}
      <section
        style={{
          background: 'var(--sky-200)',
          padding: '80px 40px 100px',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '2.5px solid var(--ink-900)',
        }}
      >
        {/* floating doodles */}
        <Doodle style={{ top: 60, right: '12%', transform: 'rotate(-12deg)' }}>✿</Doodle>
        <Doodle style={{ top: 220, left: '8%', transform: 'rotate(8deg)' }}>★</Doodle>
        <Doodle style={{ bottom: 80, right: '8%', transform: 'rotate(20deg)' }}>♥</Doodle>

        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>Made-to-order · stitched by hand</Eyebrow>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(48px, 6vw, 88px)',
                lineHeight: 0.95,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              A fanny pack
              <br />
              <span style={{ color: 'var(--mustard-400)' }}>as weird</span>
              <br />
              as you are.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 20,
                lineHeight: 1.55,
                color: 'var(--ink-700)',
                maxWidth: 480,
                marginTop: 24,
              }}
            >
              Pick the fabric. Pick the strap. Pin on the patches that say something
              about you. We sew the whole thing in a small workshop in Washington — every
              one is a one-of-one.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, alignItems: 'center' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('build')}>
                Start your sketch →
              </Button>
              <Caption rotate={-2} style={{ marginLeft: 6 }}>— takes about 3 minutes</Caption>
            </div>
          </div>

          {/* big logo / illustration block */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img
              src="./assets/logo-hamlet-pig.png"
              alt="Hamlet the pig"
              style={{
                width: '100%',
                maxWidth: 360,
                filter: 'drop-shadow(0 16px 30px rgba(31,134,173,0.25))',
              }}
            />
            <Badge color="mustard" rotate={-8} style={{ position: 'absolute', top: 30, right: 0, fontSize: 18, padding: '6px 18px' }}>
              to be (or not 2B)
            </Badge>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={{ padding: '70px 40px', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <div>
            <Eyebrow>The shop</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 48px)', margin: '8px 0 0', letterSpacing: '-0.02em' }}>
              Fresh from the workbench.
            </h2>
          </div>
          <Caption rotate={1.5}>* updated every Sunday *</Caption>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          <ProductCard
            name="The Saturday"
            sub="oat linen · 1 patch"
            fabric="linen"
            strap="mustard"
            patches={['star']}
            price="$41"
            tag={{ label: 'new!', color: 'mustard', rot: -8 }}
            onClick={() => onAddToCart('Saturday')}
          />
          <ProductCard
            name="The Picnic"
            sub="pink gingham · cherry patch"
            fabric="gingham"
            strap="pink"
            patches={['heart', 'flower']}
            price="$49"
            crossed="$65"
            tag={{ label: '3 left', color: 'pink', rot: -6 }}
            onClick={() => onAddToCart('Picnic')}
          />
          <ProductCard
            name="The Understudy"
            sub="ink polka · skull & bolt"
            fabric="polka"
            strap="ink"
            patches={['skull', 'bolt']}
            price="$45"
            tag={{ label: 'not 2B', color: 'sky', rot: 4 }}
            onClick={() => onAddToCart('Understudy')}
          />
          <ProductCard
            name="The Field Trip"
            sub="cottage floral · bee patch"
            fabric="floral"
            strap="rope"
            patches={['bee', 'flower']}
            price="$53"
            onClick={() => onAddToCart('Field Trip')}
          />
          <ProductCard
            name="The Workwear"
            sub="denim · brave word-patch"
            fabric="denim"
            strap="mustard"
            patches={['brave']}
            price="$41"
            onClick={() => onAddToCart('Workwear')}
          />
          <ProductCard
            name="The Sundae"
            sub="mustard solid · moon & star"
            fabric="mustard"
            strap="ink"
            patches={['moon', 'star']}
            price="$37"
            tag={{ label: 'best seller', color: 'moss', rot: -3 }}
            onClick={() => onAddToCart('Sundae')}
          />
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section style={{ background: 'var(--mustard-100)', borderTop: '2.5px solid var(--ink-900)', borderBottom: '2.5px solid var(--ink-900)', padding: '60px 40px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <Eyebrow style={{ textAlign: 'center', marginBottom: 6 }}>How it works</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', textAlign: 'center', margin: '0 0 40px', letterSpacing: '-0.02em' }}>
            Three minutes of you. Ten days of us.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            <Step n="1" title="Sketch it" body="Pick fabric, strap, patches. Drag them around until it feels like yours." />
            <Step n="2" title="We stitch it" body="Your sketch lands on a real workbench in Washington. One person, start to finish." />
            <Step n="3" title="It shows up" body="Ten days later it's at your door, packed in a reusable cotton bag." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Doodle = ({ children, style }) => (
  <div
    style={{
      position: 'absolute',
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      color: 'var(--ink-900)',
      opacity: 0.35,
      pointerEvents: 'none',
      userSelect: 'none',
      ...style,
    }}
  >
    {children}
  </div>
);

const ProductCard = ({ name, sub, fabric, strap, patches, price, crossed, tag, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: '#fff',
      border: '2.5px solid var(--ink-900)',
      borderRadius: 22,
      boxShadow: cardShadow,
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 220ms cubic-bezier(0.22,1,0.36,1)',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px) rotate(-0.4deg)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) rotate(0)')}
  >
    <div
      style={{
        height: 220,
        background: 'var(--sky-100)',
        borderBottom: '2.5px solid var(--ink-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Pack fabric={fabric} strap={strap} patches={patches} size="md" />
      {tag && (
        <Badge
          color={tag.color}
          rotate={tag.rot}
          style={{ position: 'absolute', top: 14, right: 14, fontSize: 14 }}
        >
          {tag.label}
        </Badge>
      )}
    </div>
    <div style={{ padding: '16px 18px' }}>
      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0, lineHeight: 1.05 }}>{name}</h4>
      <p style={{ fontFamily: 'var(--font-hand)', fontSize: 15, color: 'var(--ink-600)', margin: '4px 0 12px' }}>
        — {sub}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22 }}>{price}</span>
          {crossed && (
            <span style={{ fontFamily: 'var(--font-body)', textDecoration: 'line-through', color: 'var(--ink-400)', fontSize: 15 }}>{crossed}</span>
          )}
        </div>
        <Button variant="primary" size="sm" onClick={(e) => { e.stopPropagation(); }}>
          Add to cart
        </Button>
      </div>
    </div>
  </div>
);

const Step = ({ n, title, body }) => (
  <div style={{ textAlign: 'center' }}>
    <div
      style={{
        width: 64,
        height: 64,
        background: '#fff',
        border: '2.5px solid var(--ink-900)',
        borderRadius: '50%',
        margin: '0 auto 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 32,
        boxShadow: stickerShadow,
        transform: 'rotate(-3deg)',
      }}
    >
      {n}
    </div>
    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, margin: '0 0 8px' }}>{title}</h4>
    <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--ink-700)', maxWidth: 280, margin: '0 auto', lineHeight: 1.55 }}>
      {body}
    </p>
  </div>
);

const Footer = () => (
  <footer style={{ background: 'var(--ink-900)', color: 'var(--ink-50)', padding: '40px' }}>
    <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>
        The Handmade <span style={{ color: 'var(--mustard-300)' }}>Hamlet</span>
      </div>
      <div style={{ fontFamily: 'var(--font-hand)', fontSize: 18, color: 'var(--mustard-200)' }}>
        — to be, or not 2B —
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--ink-300)' }}>
        © 2026 · stitched in Washington
      </div>
    </div>
  </footer>
);

Object.assign(window, { ShopPage });
