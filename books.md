---
layout: default
title: Recommended Books
---

[← Back to Home](./index.html)

# 📚 Recommended Books

Books that have shaped my approach to Machine Learning Engineering and AI Systems.

---

## Machine Learning Engineering

### [Machine Learning Engineering](http://www.mlebook.com/)
**by Andriy Burkov**

A comprehensive guide to building production-ready machine learning systems. This book covers the entire ML lifecycle from problem formulation to deployment and monitoring.

**Key Topics**:
- Feature engineering and selection
- Model training and evaluation
- Hyperparameter optimization
- ML system design and architecture
- Model deployment and serving
- Monitoring and maintenance

**Why I recommend it**: Bridges the gap between academic ML and real-world engineering practices. Essential for anyone moving from research to production ML systems.

---

## AI Engineering

### [AI Engineering: Building Applications with Foundation Models](https://www.oreilly.com/library/view/ai-engineering/9781098166298/)
**by Chip Huyen**

A comprehensive guide to building AI applications with foundation models (LLMs, vision models, multimodal models). Focuses on practical engineering challenges of developing, deploying, and maintaining AI systems powered by foundation models.

**Key Topics**:
- Foundation models and their capabilities
- Prompt engineering and optimization
- Model evaluation and testing
- Fine-tuning and adaptation strategies
- RAG (Retrieval-Augmented Generation) systems
- AI system design patterns
- Model deployment and serving
- Cost optimization and latency management
- Safety, security, and responsible AI

**Why I recommend it**: Essential for understanding how to build production AI applications in the era of foundation models. Covers the complete lifecycle from prompt design to deployment, with practical engineering insights for working with LLMs and other foundation models.

---

## 📖 How These Books Influenced My Engineering Approach

Reading these books fundamentally transformed how I approach ML projects - shifting my mindset from "making models work" to "building systems that last." Here's how their principles shaped my work:

### From Prototypes to Production Systems

Both books emphasize that **successful ML projects require more than just accurate models** - they demand system-level thinking and sound engineering practices. This philosophy is evident throughout my projects:

- **Forecasting Demo**: Instead of stopping at a trained model, I built an interactive Streamlit app that delivers actionable insights to end users. Following Burkov's teachings on maintainable ML pipelines, I implemented modular components and automated project structure validation.

- **Recommendation System**: This project embodies the full ML lifecycle that both authors advocate - from data ingestion and model building to experimentation and serving. Using MLflow for tracking, Hydra for configuration, and Optuna for hyperparameter tuning directly applies their principles of reproducibility and systematic improvement.

- **Computer Vision Project**: Even as a rapid prototype, I approached it with system-level thinking - surveying existing research, decomposing the complex problem into manageable sub-tasks, and thinking ahead to potential deployment scenarios.

### Engineering Practices That Matter

The books taught me to prioritize several key practices that now permeate all my work:

**1. Configuration-Driven Development**  
Following Burkov's advice to avoid hard-coding, I use Hydra across projects to manage configurations. This makes experiments reproducible and collaboration easier - changing models or parameters doesn't require diving into code.

**2. Experiment Tracking & Reproducibility**  
MLflow integration ensures every training run is logged with metrics, parameters, and artifacts. This discipline, stressed in both books, transforms ML development from ad-hoc experimentation to systematic engineering.

**3. User-Centric Deployment**  
Chip Huyen's emphasis on "meeting users where they are" inspired me to always build interactive demos. Whether it's a Streamlit dashboard for forecasting or a Gradio app on Hugging Face Spaces, I ensure models don't just work - they're accessible and useful.

**4. Rapid Prototyping with System Thinking**  
Huyen's "prototype-first" approach changed how I validate ideas. Instead of waiting for perfect data or complete requirements, I build quick prototypes to uncover challenges early - then iterate based on learnings.

### The Journey from Code to System

These books taught me that ML engineering is a journey of progressive sophistication:

- **Start Simple**: Get a working baseline (the forecasting demo)
- **Add Engineering Rigor**: Introduce tracking, configuration, testing (the recommendation system)
- **Think Ahead**: Even in prototypes, consider deployment and scaling (the CV project)

Each project represents a step in this journey, adding layers of engineering sophistication while maintaining focus on real-world impact.

### Key Takeaways That Guide My Work

1. **Modularity is Non-Negotiable**: Clean, modular code isn't just nice-to-have - it's essential for maintaining and scaling ML systems.

2. **Automation Enables Innovation**: Automated testing, hyperparameter tuning, and deployment free me to focus on improving models rather than managing infrastructure.

3. **Documentation is Part of the Product**: Well-documented code and clear README files make projects accessible to collaborators and future-me.

4. **Production Readiness from Day One**: Even prototypes benefit from thinking about deployment, monitoring, and user interaction early.

5. **Leverage Existing Work**: Standing on the shoulders of giants (using pre-trained models, existing libraries, proven architectures) accelerates development and improves results.

### Looking Forward

These books continue to influence how I approach new challenges. As I work on production systems at Swiss Re and explore new domains, I consistently return to their principles: build systems not just models, prioritize reproducibility and maintainability, and always keep the end user in mind.

The combination of Burkov's engineering rigor and Huyen's modern AI perspectives provides a complete framework for building ML systems that don't just work in notebooks, but thrive in production - solving real problems for real users.

---

## 💡 Why These Books Matter

These books emphasize the engineering aspects of machine learning that are often overlooked in academic settings:

- **End-to-end thinking**: From problem formulation to production deployment
- **System design**: Building scalable, maintainable ML infrastructure
- **Production considerations**: Monitoring, debugging, and maintaining ML systems
- **Real-world constraints**: Latency, cost, reliability, and business impact
- **Development best practices**: Version control (Gitflow), unit testing, comprehensive documentation, and code quality standards

If you're transitioning from ML research to ML engineering, or building production ML systems, these are essential reads.

---

## 🤝 Let's Discuss!

Have you read these books? Want to discuss ML engineering practices? Feel free to reach out!

📧 [m.villerabel@gmail.com](mailto:m.villerabel@gmail.com)

---

[← Back to Home](./index.html) | [View Projects →](./projects.html) | [About Me →](./about.html)