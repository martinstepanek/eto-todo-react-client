import React from 'react';

interface ErrorBoundaryProps {
  errorPage: React.ReactElement;
  children: React.ReactElement;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { errorPage, children } = this.props;

    if (this.state.hasError) {
      return errorPage;
    }

    return children;
  }
}

export default ErrorBoundary;
