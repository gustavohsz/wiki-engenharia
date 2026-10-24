---
title: Voltage drop in conductors
description: Voltage drop calculation for low-voltage circuits and check against the NBR 5410 limits.
sidebar_position: 10
---

:::caution
Support tool. It does not replace the analysis and technical responsibility of a qualified professional. Always check the assumptions below.
:::

## Purpose

Determine the voltage drop in a low-voltage circuit, that is, how much of the source voltage is lost in the conductors before reaching the load, and check it against the limits of the standard. On long circuits this is often the criterion that sets the conductor size. Excessive voltage drop makes motors overheat, lamps lose output and electronic equipment malfunction.

## Reference standard

ABNT NBR 5410:2004 (Corrected Version 2008), section 6.2.7. See the [NBR 5410 summary](../normas/abnt-nbr-5410.md).

| Situation | Voltage drop limit |
|---|---|
| Supply from the public low-voltage network | 4%, from the delivery point to the load |
| Dedicated transformer or own generation | 7%, from the transformer secondary to the load |
| Final circuits, in any case | 4% |

The limits apply to the **total** path (feeder plus final circuit), not to each section separately.

## Assumptions and limits of application

- Steady state, with balanced load on three-phase circuits.
- **Copper conductors.** Resistivity is taken at the insulation's maximum operating temperature (70 °C for PVC). This is conservative, since the real conductor usually runs cooler.
- **Simplified formula:** ignores inductive reactance. It is suitable up to about 25 mm². For larger sizes, use the full formula with the manufacturer's R and X.
- Not valid for motor starting, where the transient current is several times the rated current and the standard allows its own limits.
- Results in volts and as a percentage of the circuit's rated voltage.

## Formulas

**Full formula** (resistance and reactance per kilometer):

```text
Single-phase or two-phase circuit (2 loaded conductors):
    ΔV = 2 · I · L · (R · cos φ + X · sin φ)

Balanced three-phase circuit:
    ΔV = √3 · I · L · (R · cos φ + X · sin φ)

Percentage drop:
    ΔV% = ΔV / V × 100
```

**Simplified formula** (resistance only, cross-section in mm²):

```text
Single/two-phase:   ΔV = 2  · ρ · L · I · cos φ / S
Three-phase:        ΔV = √3 · ρ · L · I · cos φ / S
```

| Variable | Meaning | Unit |
|---|---|---|
| ΔV | Voltage drop | V |
| I | Circuit design current | A |
| L | Circuit length (one way) | km in the full formula, m in the simplified one |
| R, X | Conductor resistance and reactance | Ω/km |
| ρ | Copper resistivity at 70 °C ≈ 0.0206 | Ω·mm²/m |
| S | Conductor cross-section | mm² |
| cos φ | Load power factor | — |
| V | Circuit rated voltage: phase-to-neutral for single-phase L-N circuits, phase-to-phase otherwise | V |

ρ is the resistivity of copper at 20 °C (0.017241 Ω·mm²/m) corrected to 70 °C with a temperature coefficient of 0.00393 /°C: 0.017241 × (1 + 0.00393 × 50) ≈ 0.0206 Ω·mm²/m.

## Calculator

:::note Under development
The interactive calculator arrives in Phase 4 of the roadmap. Until then, use the formulas and the worked example below.
:::

## Worked example

**Data:** a 5500 W electric shower connected between two phases of a 127/220 V system (220 V circuit, 2 loaded conductors), cos φ = 1, length 20 m. The conductor is the 4 mm² [450/750 V flexible PVC cable](../catalogo/condutores/cabo-flexivel-450-750-v-pvc.md) in conduit embedded in masonry (method B1).

1. Design current: I = 5500 / 220 = **25 A**. On current-carrying capacity, 2.5 mm² (24 A in method B1) is not enough and 4 mm² (32 A) is.
2. Voltage drop: ΔV = 2 × 0.0206 × 20 × 25 × 1 / 4 ≈ **5.15 V**.
3. Percentage drop: ΔV% = 5.15 / 220 × 100 ≈ **2.34%**, below the 4% allowed for the final circuit.
4. Total path check: if the panel feeder already has a 1.5% drop, the total is 1.5 + 2.34 = **3.84%**, still within the 4% allowed for low-voltage supply.

**Maximum length.** With the feeder at 1.5%, 2.5% is left for this circuit. Solving for L:

```text
L max = ΔV% × V × S / (100 × 2 × ρ × I)
      = 2.5 × 220 × 4 / (100 × 2 × 0.0206 × 25) ≈ 21.3 m
```

Beyond about 21 m, this circuit would need a 6 mm² conductor.

## References

- ABNT NBR 5410:2004, Corrected Version 2008, section 6.2.7 (voltage drop) and section 6.2.5 (current-carrying capacity).
- Cable manufacturers' technical catalogs, for R and X values per kilometer.
