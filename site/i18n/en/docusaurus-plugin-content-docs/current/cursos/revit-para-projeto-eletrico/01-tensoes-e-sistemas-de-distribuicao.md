---
title: "Lesson 1: Voltages and distribution systems"
description: How to set up voltage definitions and distribution systems for a Brazilian electrical project in Revit.
sidebar_position: 1
---

**Course:** [Revit for electrical design](./index.md) · **Module:** 1, Project setup · **Estimated duration:** 30 minutes

## Objectives

By the end of this lesson you will be able to:

1. Explain the role of voltage definitions and distribution systems in Revit.
2. Set up the 127/220 V and 220/380 V systems used in Brazil.
3. Assign a distribution system to a panel and understand why a circuit may "not show up" for a device.

## Prerequisites

- Revit 2022 or later, with a project started from a template that includes the electrical discipline (for example, the "Electrical" template that ships with Revit).
- Basic three-phase concepts: phase voltage (phase to neutral) and line voltage (phase to phase).

## Content

### Why set this up first

Revit only lets you connect a device to a circuit when three things match:

1. the device connector's **voltage** (for example, 127 V or 220 V);
2. the connector's **number of poles** (1 pole for phase-neutral, 2 poles for phase-phase);
3. the panel's **distribution system**, which states what voltages it supplies.

Out-of-the-box Revit templates ship with North American voltages (120/208 V, 277/480 V). If you do not create the Brazilian voltages, devices will not find a compatible panel and the create-circuit button does not appear. That is why this is the first setting in any electrical project.

### Where the setting is

On the ribbon: **Manage › MEP Settings › Electrical Settings** (in the Portuguese interface, *Gerenciar › Configurações de MEP › Configurações elétricas*). The left pane has the two items in this lesson: **Voltage Definitions** and **Distribution Systems**.

### Step 1: voltage definitions

Each voltage definition has a **name**, a **value** and a **minimum-maximum** range. A device counts as compatible when its connector voltage falls within the range. Suggested values for Brazilian projects:

| Name | Value | Minimum | Maximum |
|---|---|---|---|
| 127 V | 127 V | 115 V | 135 V |
| 220 V | 220 V | 200 V | 240 V |
| 380 V | 380 V | 360 V | 400 V |

The ranges must not overlap. If 127 V and 220 V overlap, Revit cannot tell which definition to use.

### Step 2: distribution systems

A distribution system describes a panel's supply. The main fields:

- **Phase:** *Three* or *Single*.
- **Configuration:** *Wye* or *Delta*. Applies to three-phase systems only.
- **Wires:** number of conductors, not counting the protective conductor. Three-phase with neutral = 4.
- **L-L Voltage:** phase-to-phase voltage.
- **L-G Voltage:** phase-to-neutral (or ground) voltage.

Create the two most common Brazilian systems:

| Name | Phase | Configuration | Wires | L-L Voltage | L-G Voltage |
|---|---|---|---|---|---|
| 127/220 V 3F+N | Three | Wye | 4 | 220 V | 127 V |
| 220/380 V 3F+N | Three | Wye | 4 | 380 V | 220 V |

Name each system with the same text that will appear on the panel schedule and single-line diagram. This avoids rework in the documentation.

### Step 3: assign the system to a panel

1. Place a panel (a family in the *Electrical Equipment* category).
2. Select the panel and, in **Properties**, set **Distribution System** to "127/220 V 3F+N".
3. Select a 127 V, 1-pole outlet, create a power circuit and pick the panel. It is offered because the voltage and number of poles match the system.
4. Repeat with a 220 V, 2-pole device such as an electric shower. In a 127/220 V system, 220 V comes from connecting two phases.

### Common error: the panel is not in the list

If the panel does not appear when you create a circuit, check in this order:

1. Does the panel have a distribution system assigned?
2. Does the device connector voltage fall within one of the voltage definition ranges?
3. Is the device's number of poles possible on that system? A 380 V device cannot connect to a 127/220 V panel.

### Save it in the template

Once configured, save the project as the office **template** (.rte), so new projects start with the Brazilian voltages.

## Exercise

1. In a new project, create the three voltage definitions and two distribution systems from this lesson.
2. Place two panels, one 127/220 V and one 220/380 V.
3. Connect a 127 V outlet to the first panel and a 380 V three-phase device to the second.
4. Try to connect the 380 V device to the 127/220 V panel and note that Revit does not allow it. Explain why, using the three criteria at the start of the lesson.

## Material

- Video: not available yet.
- Supporting files: not available yet.

## Next lesson

Lesson 2: Loads and demand factors *(planned)*.
