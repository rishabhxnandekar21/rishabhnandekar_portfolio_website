

# Page Load Animation & Adaptive Preloader Plan

## Visual Animation Preview

### Preloader Animation (Phase 1)
```text
┌─────────────────────────────────────────────┐
│                                             │
│                                             │
│              ┌───────────┐                  │
│              │    RN     │  ← Logo/Initials │
│              └───────────┘    (subtle pulse)│
│                                             │
│         ━━━━━━━━━━━━━━━━━━━━━━              │
│         ↑ Progress line (fills left→right) │
│                                             │
│                                             │
└─────────────────────────────────────────────┘

Timeline: 0ms → Asset Ready (adaptive, no artificial delay)
- Logo fades in with subtle scale (0.95 → 1.0)
- Progress line animates based on REAL load progress
- On fast connections: skipped entirely (<300ms load)
```

### Transition Phase (Phase 2)
```text
┌─────────────────────────────────────────────┐
│                                             │
│           Logo scales up + fades out        │
│              ┌───────────┐                  │
│              │    RN     │ → opacity: 0     │
│              └───────────┘   scale: 1.1     │
│                                             │
│         Backdrop fades to transparent       │
│                                             │
└─────────────────────────────────────────────┘

Duration: 400ms smooth fade
```

### Page Entrance Animation (Phase 3)
```text
Frame 1 (0ms)         Frame 2 (200ms)       Frame 3 (400ms)
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   ░░░░░░░    │      │  ┌──────┐    │      │  ┌──────┐    │
│   Navbar     │  →   │  │ Nav  │    │  →   │  │ Nav  │    │
│   (hidden)   │      │  └──────┘    │      │  └──────┘    │
│              │      │     ↓        │      │              │
│  ░░░░░░░░░░  │      │  ┌──────┐    │      │   ○ Avatar   │
│    Avatar    │  →   │  │ ○    │    │  →   │              │
│   (hidden)   │      │  └──────┘    │      │  "Hi, I'm    │
│              │      │              │      │   Alex..."   │
│  ░░░░░░░░░░  │      │  ░░░░░░░░░░  │      │              │
│   Content    │      │   Content    │      │   [CTAs]     │
└──────────────┘      └──────────────┘      └──────────────┘

Staggered reveal:
1. Navbar: 0ms delay
2. Avatar: 100ms delay  
3. Tagline: 200ms delay
4. Name: 300ms delay
5. Title: 400ms delay
6. Bio: 500ms delay
7. CTAs: 600ms delay
8. Social: 700ms delay
```

---

## Animation Specifications

| Element | Transform | Duration | Easing |
|---------|-----------|----------|--------|
| Preloader logo | opacity 0→1, scale 0.95→1 | 300ms | ease-out |
| Progress line | width 0%→100% | adaptive | linear |
| Preloader exit | opacity 1→0, scale 1→1.05 | 400ms | ease-in-out |
| Navbar | translateY -20→0, opacity 0→1 | 500ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hero elements | translateY 30→0, opacity 0→1 | 600ms | cubic-bezier(0.4, 0, 0.2, 1) |

---

## Adaptive Loading Logic

```text
                    Page Load Start
                          │
                          ▼
              ┌───────────────────────┐
              │  Check load time so   │
              │  far at first paint   │
              └───────────────────────┘
                          │
            ┌─────────────┼─────────────┐
            │             │             │
            ▼             ▼             ▼
       < 300ms       300-800ms       > 800ms
            │             │             │
            ▼             ▼             ▼
    ┌───────────┐  ┌───────────┐  ┌───────────┐
    │   Skip    │  │  Minimal  │  │   Full    │
    │  Preload  │  │  Loader   │  │  Loader   │
    │  Entirely │  │  (quick)  │  │  + Line   │
    └───────────┘  └───────────┘  └───────────┘
            │             │             │
            └─────────────┼─────────────┘
                          │
                          ▼
                ┌─────────────────┐
                │  Page Entrance  │
                │   Animation     │
                └─────────────────┘
```

---

## Technical Implementation

### Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/components/Preloader.tsx` | Create | Adaptive preloader component |
| `src/hooks/use-page-load.tsx` | Create | Track load state & timing |
| `src/App.tsx` | Modify | Wrap with preloader logic |
| `src/pages/Index.tsx` | Modify | Add page entrance animation context |
| `src/index.css` | Modify | Add preloader animations |
| `index.html` | Modify | Add inline critical CSS for instant loader |

### Preloader Component Features
- **Smart timing**: Uses `performance.now()` to track actual load time
- **Asset tracking**: Monitors document ready state + React hydration
- **Skip logic**: If load time < 300ms, preloader never renders
- **Progress calculation**: Based on PerformanceObserver for real metrics
- **Smooth exit**: Waits for minimum 200ms visibility to avoid flash

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .preloader-animate,
  .page-entrance {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Performance Guarantees
- **60fps animations**: Using only `transform` and `opacity` (GPU-accelerated)
- **No layout shift**: Fixed positioning, no content reflow
- **SEO-safe**: Content exists in DOM immediately, only visually hidden
- **No blocking**: Uses `requestAnimationFrame` for timing

---

## Approval Checkpoints

Before finalizing, I'll confirm with you:

1. **Logo/Initials choice**: Use "RN" initials, your name, or a custom logo?
2. **Progress indicator style**: Line (shown above), dot spinner, or percentage?
3. **Color scheme**: Keep cyan accent or different loader color?
4. **Animation intensity**: Subtle (current plan) or slightly more pronounced?

---

## Implementation Order

1. Create `use-page-load.tsx` hook for load state management
2. Create `Preloader.tsx` component with adaptive logic
3. Add critical inline CSS to `index.html` for instant loader
4. Update `App.tsx` to orchestrate preloader → page transition
5. Enhance `Index.tsx` with coordinated entrance animations
6. Add CSS keyframes and reduced-motion support to `index.css`
7. Test across network conditions (fast 4G, slow 3G, offline)

