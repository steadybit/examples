import http from 'k6/http';
import steadybit from 'https://raw.githubusercontent.com/steadybit/k6-extension/v1.0.0/index.js';
import { sleep } from 'k6';

export function setup() {
    let execution = steadybit.start('SHOP-190');
    console.log(`Started Steadybit Experiment SHOP-190`);
    return { execution };
}

export default function() {
    http.get('http://k8s.demo.steadybit.io/products', {timeout: '10s'});
    sleep(1);
}

export function teardown({ execution }) {
    try {
        steadybit.verifyCompleted(execution);
    } catch (error) {
        console.error(`Steadybit Experiment failed: ${error}`);

        try {
            steadybit.cancel(execution);
        } catch (error) {
            console.warn('Failed to cancel Steadybit Experiment', error);
        }
    }
}
