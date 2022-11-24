import { Col, Row, Typography } from 'antd';
import * as React from 'react';

/**
 * An error screen that will be used as a fallback UI.
 * @see https://reactjs.org/docs/error-boundaries
 */

const { Title } = Typography;

export class ErrorBoundary extends React.Component<Props> {
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  override state: State = { error: undefined };

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  override render() {
    const { error } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (
      <Row>
        <Col span={24}>
          <Title
            level={1}
            style={{ alignItems: 'center', fontSize: '2em', fontWeight: 300 }}
          >
            <strong>Error {error.status || 500}</strong>: {error.message}
          </Title>
        </Col>
      </Row>
    );
  }
}

type Props = {
  children: React.ReactNode;
};

type State = {
  error: (Error & { status?: number }) | undefined;
};
