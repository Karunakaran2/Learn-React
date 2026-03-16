import { Component, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

// ─── Error Boundary ───────────────────────────────────────────────────────────
// Must be a CLASS component — React only supports class-based error boundaries.
class TaskErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Called when a descendant throws during render / lifecycle
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  // Good place to log to an error-reporting service
  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error(
      "TaskErrorBoundary caught an error:",
      error,
      info.componentStack,
    );
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-fallback">
          <span className="error-icon">⚠️</span>
          <h2>Something went wrong</h2>
          <p className="error-message">{this.state.error?.message}</p>
          <button className="retry-button" onClick={this.handleReset}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default TaskErrorBoundary;
