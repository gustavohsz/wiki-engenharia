---
title: ABNT NBR 5410 — Low-voltage electrical installations
description: Requirements for the design, construction, verification and maintenance of low-voltage electrical installations in Brazil.
sidebar_position: 10
---

:::caution
This is an **original summary** and does not reproduce the text of the standard. Always check the current edition at the official source.
:::

## Identification

| Field | Value |
|---|---|
| Number | ABNT NBR 5410 |
| Official title | Instalações elétricas de baixa tensão (Low-voltage electrical installations) |
| Edition / year | 2004, Corrected Version 2008 (confirmed by ABNT in 2014 and 2018) |
| Body | ABNT (Brazilian Electricity Committee, ABNT/CB-003) |
| Status | Current. Under revision: the new edition went through national public consultation and has not been published yet |
| Official source | [ABNT catalog](https://www.abntcatalogo.com.br/) (search for "NBR 5410") |

:::info Revision in progress
This page will be reviewed when the new edition is published. Until then, designs follow the 2004 edition. Be wary of files circulating as "NBR 5410:2026": the ABNT catalog is the only reliable source.
:::

## Scope

The standard sets the conditions a low-voltage installation must meet to keep people and animals safe, work properly and protect property.

- **Applies** to installations with a rated voltage of up to 1000 V AC (frequency below 400 Hz) or 1500 V DC. That covers residential, commercial, public, industrial and agricultural buildings, as well as places such as construction sites, fairs and outdoor areas.
- **Does not apply**, among other cases, to public distribution networks, traction systems, vehicles, ships and aircraft, or lightning protection, which is covered by ABNT NBR 5419.

## Key points

- **General principles:** the installation is split into circuits, so that a fault in one circuit does not cut power to the whole installation. The standard defines the TN (TN-S, TN-C, TN-C-S), TT and IT **earthing systems**. TN-C-S and TT are the most common in buildings supplied by the public low-voltage network.
- **Protection against electric shock:** combines basic protection (insulation, barriers, enclosures) with fault protection (equipotential bonding and automatic disconnection of supply). **High-sensitivity residual current devices** (rated residual current up to 30 mA) are mandatory as additional protection in bathrooms, outdoor areas, kitchens, laundries, service areas, garages and other wet indoor areas (section 5.1.3.2.2).
- **Overcurrent and overvoltage protection:** every circuit needs overload and short-circuit protection coordinated with the conductor's current-carrying capacity. Surge protective devices (SPDs) are coordinated with ABNT NBR 5419.
- **Conductor sizing:** a conductor must satisfy six criteria at once: minimum cross-section, current-carrying capacity, voltage drop, overload protection, short-circuit protection and shock protection. The largest resulting cross-section is used.
  - Current-carrying capacity tables are in section 6.2.5, corrected for ambient temperature and grouping.
  - Minimum copper cross-sections (section 6.2.6) are 1.5 mm² for lighting and 2.5 mm² for power circuits.
  - The voltage drop limit (section 6.2.7) is 4% from the delivery point for public low-voltage supply and 7% from the secondary of a dedicated transformer. Final circuits may never exceed 4%. See [Voltage drop in conductors](../calculos/queda-de-tensao.md).
- **Conductor colors:** light blue for neutral, green-yellow (or green) for the protective conductor. Phase conductors may not use these colors.
- **Dwellings (section 9.5):** minimum outlet count per room (based on perimeter or area) and minimum load allowances. Lighting and outlets go on separate circuits. Equipment above 10 A, such as electric showers and ovens, needs a dedicated circuit.
- **Verification and maintenance:** before use, the installation requires visual inspection and tests, including protective conductor continuity, insulation resistance, automatic disconnection and RCD operation. The standard also gives guidance on periodic maintenance.

## Related standards

- **ABNT NBR 5419:** lightning protection.
- **ABNT NBR 14039:** medium-voltage installations (1.0 kV to 36.2 kV).
- **ABNT NBR NM 247-3:** PVC-insulated cables up to 450/750 V. See [450/750 V flexible PVC-insulated cable](../catalogo/condutores/cabo-flexivel-450-750-v-pvc.md).
- **Utility standards:** each utility has its own service entrance requirements, in addition to NBR 5410.

## Use in design

- **Revit:** the project's distribution systems and voltages (127/220 V or 220/380 V) reflect the chosen supply. See [Voltages and distribution systems](../cursos/revit-para-projeto-eletrico/01-tensoes-e-sistemas-de-distribuicao.md).
- **Sizing:** the conductor size must pass every criterion. Voltage drop is often the deciding one on long circuits.
- **Documentation:** the panel schedule and single-line diagram must show the protection (breaker and RCD) and conductor size of each circuit.

## Verified on

2026-10-24
