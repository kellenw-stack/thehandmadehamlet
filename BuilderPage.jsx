/** @jsx React.createElement */
/* eslint-disable */

const { useState: useBuilderState } = React;

const BuilderPage = ({ onAddToCart }) => {
  const [step, setStep] = useBuilderState('fabric');
  const [fabric, setFabric] = useBuilderState('linen');
  const [strap, setStrap] = useBuilderState('mustard');
  const [patches, setPatches] = useBuilderState(['star']);
  const [name, setName] = useBuilderState('Saturday adventurer');

  const togglePatch = (p) => {
    setPatches((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : prev.length < 4 ? [...prev, p] : prev
    );
  };

  const basePrice = 35;
  const fabricUp = { linen: 0, gingham: 6, stripe: 4, polka: 4, floral: 8, denim: 6, mustard: 2, pink: 2 }[fabric];
  const total = basePrice + fabricUp + patches.length * 4;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', minHeight: 'calc(100vh - 86px)' }}>
      {/* LEFT: Live preview */}
      <div
        style={{
          background: 'var(--sky-200)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '2.5px solid var(--ink-900)',
          position: 'relative',
        }}
      >
        {/* floating doodles */}
        <div style={{ position: 'absolute', top: 40, left: 32, fontFamily: 'var(--font-display)', fontSize: 36, opacity: 0.3, transform: 'rotate(-8deg)', userSelect: 'none' }}>✿</div>
        <div style={{ position: 'absolute', bottom: 60, right: 28, fontFamily: 'var(--font-display)', fontSize: 32, opacity: 0.3, transform: 'rotate(12deg)', userSelect: 'none' }}>★</div>

        <Eyebrow style={{ marginBottom: 6, color: 'var(--ink-700)' }}>Your sketch</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 36,
            margin: '0 0 32px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {name || 'untitled pack'}
        </h2>

        <div style={{ position: 'relative' }}>
          <Pack fabric={fabric} strap={strap} patches={patches} size="lg" />
          <Caption rotate={-3} style={{ position: 'absolute', bottom: -40, right: -20 }}>
            — one of one
          </Caption>
        </div>

        <div style={{ marginTop: 56, display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 48 }}>${total}</span>
          <span style={{ fontFamily: 'var(--font-hand)', fontSize: 16, color: 'var(--ink-700)' }}>
            ships in 10 days
          </span>
        </div>
      </div>

      {/* RIGHT: Picker */}
      <div style={{ padding: '40px 48px', background: 'var(--bg)', overflowY: 'auto' }}>
        {/* Stepper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          {[
            ['fabric', 'Fabric'],
            ['strap', 'Strap'],
            ['patches', 'Patches'],
            ['name', 'Name it'],
          ].map(([key, label], i, arr) => (
            <React.Fragment key={key}>
              <div
                onClick={() => setStep(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: '2px solid var(--ink-900)',
                    background: step === key ? 'var(--mustard-300)' : '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 13,
                    boxShadow: step === key ? '0 2px 0 rgba(18,18,18,0.9)' : 'none',
                    transition: 'background 150ms, box-shadow 150ms',
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: step === key ? 700 : 500, fontSize: 14, color: 'var(--ink-900)' }}>
                  {label}
                </span>
              </div>
              {i < arr.length - 1 && <div style={{ flex: 1, height: 2, background: 'var(--ink-200)', borderRadius: 1 }} />}
            </React.Fragment>
          ))}
        </div>

        {step === 'fabric' && (
          <Panel title="Pick the fabric" hint="Tap a swatch — we'll cut from the bolt.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
              {Object.keys(FABRICS).map((f) => (
                <SwatchTile
                  key={f}
                  selected={fabric === f}
                  onClick={() => setFabric(f)}
                  label={FABRIC_LABELS[f]}
                  price={`+$${({ linen: 0, gingham: 6, stripe: 4, polka: 4, floral: 8, denim: 6, mustard: 2, pink: 2 })[f]}`}
                  background={FABRICS[f]}
                />
              ))}
            </div>
            <NextBtn onClick={() => setStep('strap')}>Next: pick a strap →</NextBtn>
          </Panel>
        )}

        {step === 'strap' && (
          <Panel title="Pick the strap" hint="It'll be adjustable from 32 to 48 inches either way.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {Object.keys(STRAPS).map((s) => (
                <label
                  key={s}
                  onClick={() => setStrap(s)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '12px 16px',
                    border: `2.5px solid ${strap === s ? 'var(--ink-900)' : 'var(--ink-200)'}`,
                    borderRadius: 14,
                    background: strap === s ? 'var(--mustard-50)' : '#fff',
                    cursor: 'pointer',
                    boxShadow: strap === s ? '0 2px 0 rgba(18,18,18,0.9)' : 'none',
                    transition: 'border-color 150ms, background 150ms',
                  }}
                >
                  <div style={{ width: 60, height: 10, background: STRAPS[s], border: '1.5px solid var(--ink-900)', borderRadius: 4 }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>{STRAP_LABELS[s]}</span>
                </label>
              ))}
            </div>
            <NextBtn onClick={() => setStep('patches')}>Next: add some patches →</NextBtn>
          </Panel>
        )}

        {step === 'patches' && (
          <Panel title="Pin on patches" hint={`Pick up to four. ${patches.length}/4 picked.`}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {Object.keys(PATCH_DEFS).map((p) => {
                const def = PATCH_DEFS[p];
                const sel = patches.includes(p);
                return (
                  <div
                    key={p}
                    onClick={() => togglePatch(p)}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 6,
                      padding: 8,
                      borderRadius: 12,
                      background: sel ? 'var(--mustard-50)' : 'transparent',
                      outline: sel ? '2.5px solid var(--ink-900)' : 'none',
                      transition: 'background 150ms',
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: def.word ? 12 : '50%',
                        background: def.bg,
                        border: def.word ? '2px solid var(--ink-900)' : '2px dashed var(--ink-900)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: def.word ? 'var(--font-hand)' : 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: def.word ? 12 : 22,
                        padding: def.word ? '0 6px' : 0,
                        textAlign: 'center',
                        lineHeight: 1,
                      }}
                    >
                      {def.glyph}
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--ink-700)' }}>{p}</span>
                  </div>
                );
              })}
            </div>
            <NextBtn onClick={() => setStep('name')}>Next: name it →</NextBtn>
          </Panel>
        )}

        {step === 'name' && (
          <Panel title="Name your pack" hint="Pop a name on the inside tag — totally optional.">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sunday best"
              style={{
                width: '100%',
                fontFamily: 'var(--font-body)',
                fontSize: 18,
                padding: '14px 18px',
                borderRadius: 14,
                border: '2.5px solid var(--ink-900)',
                background: '#fff',
                boxShadow: '0 2px 0 rgba(18,18,18,0.9)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Caption rotate={-2} style={{ display: 'block', width: '100%' }}>— or pinch one of these:</Caption>
              {['Saturday adventurer', 'Field trip', 'Not 2B', 'Picnic season', 'Brave little'].map((s) => (
                <button
                  key={s}
                  onClick={() => setName(s)}
                  style={{
                    background: 'var(--mustard-100)',
                    border: '1.5px solid var(--ink-900)',
                    borderRadius: 999,
                    padding: '6px 14px',
                    fontFamily: 'var(--font-hand)',
                    fontSize: 14,
                    cursor: 'pointer',
                    boxShadow: '0 1.5px 0 rgba(18,18,18,0.9)',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
            <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onAddToCart(name || 'Your custom pack')}>
                Add to cart · ${total}
              </Button>
              <Caption rotate={2}>— pinky promise, 10 days</Caption>
            </div>
          </Panel>
        )}
      </div>
    </div>
  );
};

const FABRIC_LABELS = {
  linen: 'Oat linen',
  gingham: 'Pink gingham',
  stripe: 'Sky stripe',
  polka: 'Polka',
  floral: 'Cottage floral',
  denim: 'Workwear denim',
  mustard: 'Mustard solid',
  pink: 'Piglet pink',
};

const STRAP_LABELS = {
  mustard: 'Mustard webbing',
  ink: 'Ink black',
  pink: 'Piglet pink',
  sky: 'Sky blue',
  rope: 'Twisted rope',
};

const Panel = ({ title, hint, children }) => (
  <div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
      {title}
    </h3>
    <p style={{ fontFamily: 'var(--font-hand)', fontSize: 17, color: 'var(--ink-600)', margin: '0 0 20px' }}>
      — {hint}
    </p>
    {children}
  </div>
);

const SwatchTile = ({ selected, onClick, label, price, background }) => (
  <div onClick={onClick} style={{ cursor: 'pointer', textAlign: 'center' }}>
    <div
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: 14,
        border: '2.5px solid var(--ink-900)',
        background,
        boxShadow: '0 2px 0 rgba(18,18,18,0.9)',
        outline: selected ? '3px solid var(--mustard-300)' : 'none',
        outlineOffset: 3,
        transition: 'outline 150ms',
      }}
    />
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 13, marginTop: 8, color: 'var(--ink-900)' }}>
      {label}
    </div>
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-500)' }}>{price}</div>
  </div>
);

const NextBtn = ({ onClick, children }) => (
  <div style={{ marginTop: 32 }}>
    <Button variant="primary" size="md" onClick={onClick}>{children}</Button>
  </div>
);

Object.assign(window, { BuilderPage });
